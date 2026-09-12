import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {build} from 'esbuild';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const routes=[['','Home'],['work/volvo-dashboard','Fleet Admin'],['work/florida','Florida Resource Map'],['work/aqui','Aqui Beirut'],['work/maynooth','Maynooth Furniture']];
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
await fs.mkdir(path.join(root,'.build'),{recursive:true});
for(const [route,name] of routes){
 const entry=path.join(root,'src/app',route,'page.tsx');
 const output=path.join(root,'.build',(route.replaceAll('/','-')||'home')+'.mjs');
 await build({entryPoints:[entry],outfile:output,bundle:true,platform:'node',format:'esm',jsx:'automatic',external:['react','react-dom','react/jsx-runtime'],plugins:[{name:'static-pages',setup(b){
  b.onResolve({filter:/\.css$/},args=>({path:args.path,namespace:'ignore-css'}));
  b.onLoad({filter:/.*/,namespace:'ignore-css'},()=>({contents:'',loader:'js'}));
  b.onResolve({filter:/^next\/link$/},()=>({path:'link',namespace:'static-link'}));
  b.onLoad({filter:/.*/,namespace:'static-link'},()=>({contents:'import React from "react";export default function Link({children,...props}){return React.createElement("a",props,children)}',loader:'js'}));
 }}]});
 const page=await import(pathToFileURL(output));
 let body=renderToStaticMarkup(React.createElement(page.default));
 const prefix=route?'../../':'./';
 body=body.replace(/\b(href|src)="\/(?!\/)([^"]*)"/g,(_,attr,value)=>{
  let target=value;
  if(attr==='href'){
   const [pathname,hash]=value.split('#');
   if(routes.some(([r])=>r===pathname))target=(pathname?pathname+'/':'')+'index.html'+(hash?'#'+hash:'');
  }
  return `${attr}="${prefix}${target}"`;
 });
 const title=page.metadata?.title||`${name} — Yajie Hé`;
 const description=page.metadata?.description||'UX and product designer creating clear, accessible digital experiences.';
 const html=`<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="icon" href="${prefix}favicon.svg"><link rel="stylesheet" href="${prefix}assets/site.css"><link rel="stylesheet" href="${prefix}assets/custom.css"><script src="${prefix}assets/site.js" defer></script></head><body>${body}</body></html>\n`;
 const dest=path.join(root,route);await fs.mkdir(dest,{recursive:true});await fs.writeFile(path.join(dest,'index.html'),html);
 console.log('Built /'+route);
}
await fs.writeFile(path.join(root,'.nojekyll'),'');
await fs.rm(path.join(root,'.build'),{recursive:true});
