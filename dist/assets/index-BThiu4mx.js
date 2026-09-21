(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rl="170",gr={ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hf=0,yc=1,Gf=2,Qh=1,Vf=2,Hn=3,_i=0,We=1,De=2,hi=0,vr=1,Ea=2,Mc=3,Sc=4,Wf=5,Ii=100,Xf=101,qf=102,Yf=103,Zf=104,jf=200,Kf=201,Jf=202,$f=203,Ta=204,ba=205,Qf=206,td=207,ed=208,nd=209,id=210,rd=211,sd=212,od=213,ad=214,wa=0,Aa=1,Ca=2,Tr=3,Ra=4,Pa=5,La=6,Da=7,tu=0,ld=1,cd=2,ui=0,hd=1,ud=2,fd=3,eu=4,dd=5,pd=6,md=7,nu=300,br=301,wr=302,Ia=303,Ua=304,vo=306,Na=1e3,Ni=1001,Oa=1002,En=1003,_d=1004,Ss=1005,Cn=1006,Do=1007,Oi=1008,Yn=1009,iu=1010,ru=1011,rs=1012,Pl=1013,Gi=1014,Wn=1015,gs=1016,Ll=1017,Dl=1018,Ar=1020,su=35902,ou=1021,au=1022,Sn=1023,lu=1024,cu=1025,xr=1026,Cr=1027,hu=1028,Il=1029,uu=1030,Ul=1031,Nl=1033,Ks=33776,Js=33777,$s=33778,Qs=33779,Fa=35840,Ba=35841,za=35842,ka=35843,Ha=36196,Ga=37492,Va=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,ja=37813,Ka=37814,Ja=37815,$a=37816,Qa=37817,tl=37818,el=37819,nl=37820,il=37821,to=36492,rl=36494,sl=36495,fu=36283,ol=36284,al=36285,ll=36286,gd=3200,vd=3201,du=0,xd=1,oi="",fn="srgb",Nr="srgb-linear",xo="linear",Qt="srgb",Ji=7680,Ec=519,yd=512,Md=513,Sd=514,pu=515,Ed=516,Td=517,bd=518,wd=519,Tc=35044,bc="300 es",Xn=2e3,ao=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eo=Math.PI/180,cl=180/Math.PI;function Or(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[r&255]+Pe[r>>8&255]+Pe[r>>16&255]+Pe[r>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Ae(r,t,e){return Math.max(t,Math.min(e,r))}function Ad(r,t){return(r%t+t)%t}function Io(r,t,e){return(1-e)*r+e*t}function Gr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ze(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Cd={DEG2RAD:eo};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,i,s,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],x=i[4],v=i[7],P=i[2],R=i[5],b=i[8];return s[0]=o*_+a*S+l*P,s[3]=o*m+a*x+l*R,s[6]=o*p+a*v+l*b,s[1]=c*_+h*S+u*P,s[4]=c*m+h*x+u*R,s[7]=c*p+h*v+u*b,s[2]=f*_+d*S+g*P,s[5]=f*m+d*x+g*R,s[8]=f*p+d*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new kt;function mu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rd(){const r=lo("canvas");return r.style.display="block",r}const wc={};function jr(r){r in wc||(wc[r]=!0,console.warn(r))}function Pd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ld(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dd(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?xo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ac=[.64,.33,.3,.6,.15,.06],Cc=[.2126,.7152,.0722],Rc=[.3127,.329],Pc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Nr]:{primaries:Ac,whitePoint:Rc,transfer:xo,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:Cc,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:Ac,whitePoint:Rc,transfer:Qt,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:Cc,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}});let $i;class Id{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=lo("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=qn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ud=0;class _u{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Or(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(No(i[o].image)):s.push(No(i[o]))}else s=No(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function No(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Id.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nd=0;class Xe extends Zi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Ni,i=Ni,s=Cn,o=Oi,a=Sn,l=Yn,c=Xe.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Or(),this.name="",this.source=new _u(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Na:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Na:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=nu;Xe.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,P=(p+1)/2,R=(h+f)/4,b=(u+_)/4,A=(g+m)/4;return x>v&&x>P?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=R/n,s=b/n):v>P?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=R/i,s=A/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=b/s,i=A/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends Zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _u(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Od{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gu extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fd extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,p*S);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const v=a*S;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oo.copy(this).projectOnVector(t),this.sub(Oo)}reflect(t){return this.sub(Oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new I,Dc=new Wi;class vs{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(t.matrixWorld),this.union(Es)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vr),Ts.subVectors(this.max,Vr),Qi.subVectors(t.a,Vr),tr.subVectors(t.b,Vr),er.subVectors(t.c,Vr),Qn.subVectors(tr,Qi),ti.subVectors(er,tr),Ei.subVectors(Qi,er);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-Ei.z,Ei.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,Ei.z,0,-Ei.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-Ei.y,Ei.x,0];return!Fo(e,Qi,tr,er,Ts)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,Qi,tr,er,Ts))?!1:(bs.crossVectors(Qn,ti),e=[bs.x,bs.y,bs.z],Fo(e,Qi,tr,er,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new I,new I,new I,new I,new I,new I,new I,new I],vn=new I,Es=new vs,Qi=new I,tr=new I,er=new I,Qn=new I,ti=new I,Ei=new I,Vr=new I,Ts=new I,bs=new I,Ti=new I;function Fo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ti.fromArray(r,s);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Bd=new vs,Wr=new I,Bo=new I;class yo{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wr.subVectors(t,this.center);const e=Wr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Wr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wr.copy(t.center).add(Bo)),this.expandByPoint(Wr.copy(t.center).sub(Bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new I,zo=new I,ws=new I,ei=new I,ko=new I,As=new I,Ho=new I;class Mo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zo.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(zo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=ei.dot(this.direction),l=-ei.dot(ws),c=ei.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zo).addScaledVector(ws,f),d}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,i,s){ko.subVectors(e,t),As.subVectors(n,t),Ho.crossVectors(ko,As);let o=this.direction.dot(Ho),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const l=a*this.direction.dot(As.crossVectors(ei,As));if(l<0)return null;const c=a*this.direction.dot(ko.cross(ei));if(c<0||l+c>o)return null;const h=-a*ei.dot(Ho);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/nr.setFromMatrixColumn(t,0).length(),s=1/nr.setFromMatrixColumn(t,1).length(),o=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,kd)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ni.crossVectors(n,$e),ni.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ni.crossVectors(n,$e)),ni.normalize(),Cs.crossVectors($e,ni),i[0]=ni.x,i[4]=Cs.x,i[8]=$e.x,i[1]=ni.y,i[5]=Cs.y,i[9]=$e.y,i[2]=ni.z,i[6]=Cs.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],v=n[11],P=n[15],R=i[0],b=i[4],A=i[8],M=i[12],y=i[1],L=i[5],z=i[9],N=i[13],W=i[2],q=i[6],H=i[10],K=i[14],V=i[3],ft=i[7],U=i[11],D=i[15];return s[0]=o*R+a*y+l*W+c*V,s[4]=o*b+a*L+l*q+c*ft,s[8]=o*A+a*z+l*H+c*U,s[12]=o*M+a*N+l*K+c*D,s[1]=h*R+u*y+f*W+d*V,s[5]=h*b+u*L+f*q+d*ft,s[9]=h*A+u*z+f*H+d*U,s[13]=h*M+u*N+f*K+d*D,s[2]=g*R+_*y+m*W+p*V,s[6]=g*b+_*L+m*q+p*ft,s[10]=g*A+_*z+m*H+p*U,s[14]=g*M+_*N+m*K+p*D,s[3]=S*R+x*y+v*W+P*V,s[7]=S*b+x*L+v*q+P*ft,s[11]=S*A+x*z+v*H+P*U,s[15]=S*M+x*N+v*K+P*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,P=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,R=e*S+n*x+i*v+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=S*b,t[1]=(_*f*s-u*m*s-_*i*d+n*m*d+u*i*p-n*f*p)*b,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*b,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*b,t[4]=x*b,t[5]=(h*m*s-g*f*s+g*i*d-e*m*d-h*i*p+e*f*p)*b,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*b,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*b,t[8]=v*b,t[9]=(g*u*s-h*_*s-g*n*d+e*_*d+h*n*p-e*u*p)*b,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*b,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*b,t[12]=P*b,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*b,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,_=o*h,m=o*u,p=a*u,S=l*c,x=l*h,v=l*u,P=n.x,R=n.y,b=n.z;return i[0]=(1-(_+p))*P,i[1]=(d+v)*P,i[2]=(g-x)*P,i[3]=0,i[4]=(d-v)*R,i[5]=(1-(f+p))*R,i[6]=(m+S)*R,i[7]=0,i[8]=(g+x)*b,i[9]=(m-S)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=nr.set(i[0],i[1],i[2]).length();const o=nr.set(i[4],i[5],i[6]).length(),a=nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],xn.copy(this);const c=1/s,h=1/o,u=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Xn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===Xn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ao)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Xn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h;let g,_;if(a===Xn)g=(o+s)*u,_=-2*u;else if(a===ao)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const nr=new I,xn=new ae,zd=new I(0,0,0),kd=new I(1,1,1),ni=new I,Cs=new I,$e=new I,Ic=new ae,Uc=new Wi;class Pn{constructor(t=0,e=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hd=0;const Nc=new I,ir=new Wi,Bn=new ae,Rs=new I,Xr=new I,Gd=new I,Vd=new Wi,Oc=new I(1,0,0),Fc=new I(0,1,0),Bc=new I(0,0,1),zc={type:"added"},Wd={type:"removed"},rr={type:"childadded",child:null},Go={type:"childremoved",child:null};class be extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new I,e=new Pn,n=new Wi,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return Nc.copy(t).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rs.copy(t):Rs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Xr,Rs,this.up):Bn.lookAt(Rs,Xr,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),ir.setFromRotationMatrix(Bn),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),rr.child=t,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wd),Go.child=t,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,t,Gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new I(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new I,zn=new I,Vo=new I,kn=new I,sr=new I,or=new I,kc=new I,Wo=new I,Xo=new I,qo=new I,Yo=new ee,Zo=new ee,jo=new ee;class Mn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yn.subVectors(i,e),zn.subVectors(n,e),Vo.subVectors(t,e);const o=yn.dot(yn),a=yn.dot(zn),l=yn.dot(Vo),c=zn.dot(zn),h=zn.dot(Vo),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Yo.setScalar(0),Zo.setScalar(0),jo.setScalar(0),Yo.fromBufferAttribute(t,e),Zo.fromBufferAttribute(t,n),jo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Yo,s.x),o.addScaledVector(Zo,s.y),o.addScaledVector(jo,s.z),o}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),zn.subVectors(t,e),yn.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),yn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;sr.subVectors(i,n),or.subVectors(s,n),Wo.subVectors(t,n);const l=sr.dot(Wo),c=or.dot(Wo);if(l<=0&&c<=0)return e.copy(n);Xo.subVectors(t,i);const h=sr.dot(Xo),u=or.dot(Xo);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(sr,o);qo.subVectors(t,s);const d=sr.dot(qo),g=or.dot(qo);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(or,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return kc.subVectors(s,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(kc,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(sr,o).addScaledVector(or,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Ko(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Ad(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ko(o,s,t+1/3),this.g=Ko(o,s,t),this.b=Ko(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Zt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ae(Le.r*255,0,255))*65536+Math.round(Ae(Le.g*255,0,255))*256+Math.round(Ae(Le.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,s=Le.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=fn){Zt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Ps);const n=Io(ii.h,Ps.h,e),i=Io(ii.s,Ps.s,e),s=Io(ii.l,Ps.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Xt;Xt.NAMES=vu;let Xd=0;class Fr extends Zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Or(),this.name="",this.blending=vr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=ba,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gi extends Fr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new I,Ls=new ht;class mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tc&&(t.usage=this.usage),t}}class xu extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yu extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qd=0;const hn=new ae,Jo=new be,ar=new I,Qe=new vs,qr=new vs,Ee=new I;class Oe extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?yu:xu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Qe.min,qr.min),Qe.expandByPoint(Ee),Ee.addVectors(Qe.max,qr.max),Qe.expandByPoint(Ee)):(Qe.expandByPoint(qr.min),Qe.expandByPoint(qr.max))}Qe.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(ar.fromBufferAttribute(t,c),Ee.add(ar)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new I,l[A]=new I;const c=new I,h=new I,u=new I,f=new ht,d=new ht,g=new ht,_=new I,m=new I;function p(A,M,y){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[A].add(_),a[M].add(_),a[y].add(_),l[A].add(m),l[M].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let A=0,M=S.length;A<M;++A){const y=S[A],L=y.start,z=y.count;for(let N=L,W=L+z;N<W;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new I,v=new I,P=new I,R=new I;function b(A){P.fromBufferAttribute(i,A),R.copy(P);const M=a[A];x.copy(M),x.sub(P.multiplyScalar(P.dot(M))).normalize(),v.crossVectors(R,M);const L=v.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,L)}for(let A=0,M=S.length;A<M;++A){const y=S[A],L=y.start,z=y.count;for(let N=L,W=L+z;N<W;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new mn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hc=new ae,bi=new Mo,Ds=new yo,Gc=new I,Is=new I,Us=new I,Ns=new I,$o=new I,Os=new I,Vc=new I,Fs=new I;class Wt extends be{constructor(t=new Oe,e=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&($o.fromBufferAttribute(u,t),o?Os.addScaledVector($o,h):Os.addScaledVector($o.sub(e),h))}e.add(Os)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(Ds.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Ds,Gc)===null||bi.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(Hc.copy(s).invert(),bi.copy(t.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,P=x;v<P;v+=3){const R=a.getX(v),b=a.getX(v+1),A=a.getX(v+2);i=Bs(this,p,t,n,c,h,u,R,b,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=Bs(this,o,t,n,c,h,u,S,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,P=x;v<P;v+=3){const R=v,b=v+1,A=v+2;i=Bs(this,p,t,n,c,h,u,R,b,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,v=m+2;i=Bs(this,o,t,n,c,h,u,S,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Yd(r,t,e,n,i,s,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===_i,a),l===null)return null;Fs.copy(a),Fs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Fs);return c<e.near||c>e.far?null:{distance:c,point:Fs.clone(),object:r}}function Bs(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Is),r.getVertexPosition(l,Us),r.getVertexPosition(c,Ns);const h=Yd(r,t,e,n,Is,Us,Ns,Vc);if(h){const u=new I;Mn.getBarycoord(Vc,Is,Us,Ns,u),i&&(h.uv=Mn.getInterpolatedAttribute(i,a,l,c,u,new ht)),s&&(h.uv1=Mn.getInterpolatedAttribute(s,a,l,c,u,new ht)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Mn.getNormal(Is,Us,Ns,f.normal),h.face=f,h.barycoord=u}return h}class Xi extends Oe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,m,p,S,x,v,P,R,b,A,M){const y=v/b,L=P/A,z=v/2,N=P/2,W=R/2,q=b+1,H=A+1;let K=0,V=0;const ft=new I;for(let U=0;U<H;U++){const D=U*L-N;for(let it=0;it<q;it++){const pt=it*y-z;ft[_]=pt*S,ft[m]=D*x,ft[p]=W,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=R>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(it/b),u.push(1-U/A),K+=1}}for(let U=0;U<A;U++)for(let D=0;D<b;D++){const it=f+D+q*U,pt=f+D+q*(U+1),k=f+(D+1)+q*(U+1),j=f+(D+1)+q*U;l.push(it,pt,j),l.push(pt,k,j),V+=6}a.addGroup(d,V,M),d+=V,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(r){const t={};for(let e=0;e<r.length;e++){const n=Rr(r[e]);for(const i in n)t[i]=n[i]}return t}function Zd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Mu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const jd={clone:Rr,merge:Fe};var Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Fr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=Zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Su extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new I,Wc=new ht,Xc=new ht;class en extends Su{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,Wc,Xc),e.subVectors(Xc,Wc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(eo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const lr=-90,cr=1;class $d extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(lr,cr,t,e);i.layers=this.layers,this.add(i);const s=new en(lr,cr,t,e);s.layers=this.layers,this.add(s);const o=new en(lr,cr,t,e);o.layers=this.layers,this.add(o);const a=new en(lr,cr,t,e);a.layers=this.layers,this.add(a);const l=new en(lr,cr,t,e);l.layers=this.layers,this.add(l);const c=new en(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eu extends Xe{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:br,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qd extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Eu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xi(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:hi});s.uniforms.tEquirect.value=e;const o=new Wt(i,s),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=Cn),new $d(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Qo=new I,tp=new I,ep=new kt;class si{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qo.subVectors(n,e).cross(tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ep.getNormalMatrix(t),i=this.coplanarPoint(Qo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new yo,zs=new I;class Fl{constructor(t=new si,e=new si,n=new si,i=new si,s=new si,o=new si){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-d,v-p).normalize(),n[1].setComponents(l+s,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+h,m+g,v+S).normalize(),n[3].setComponents(l-o,f-h,m-g,v-S).normalize(),n[4].setComponents(l-a,f-u,m-_,v-x).normalize(),e===Xn)n[5].setComponents(l+a,f+u,m+_,v+x).normalize();else if(e===ao)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zs.x=i.normal.x>0?t.max.x:t.min.x,zs.y=i.normal.y>0?t.max.y:t.min.y,zs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function np(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class So extends Oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*f-o;for(let x=0;x<c;x++){const v=x*u-s;g.push(v,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const x=S+c*p,v=S+c*(p+1),P=S+1+c*(p+1),R=S+1+c*p;d.push(x,v,R),d.push(v,P,R)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.width,t.height,t.widthSegments,t.heightSegments)}}var ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_p=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,__=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:ip,alphahash_pars_fragment:rp,alphamap_fragment:sp,alphamap_pars_fragment:op,alphatest_fragment:ap,alphatest_pars_fragment:lp,aomap_fragment:cp,aomap_pars_fragment:hp,batching_pars_vertex:up,batching_vertex:fp,begin_vertex:dp,beginnormal_vertex:pp,bsdfs:mp,iridescence_fragment:_p,bumpmap_pars_fragment:gp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:yp,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:Ep,color_pars_vertex:Tp,color_vertex:bp,common:wp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Rp,displacementmap_vertex:Pp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Dp,colorspace_fragment:Ip,colorspace_pars_fragment:Up,envmap_fragment:Np,envmap_common_pars_fragment:Op,envmap_pars_fragment:Fp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:jp,envmap_vertex:zp,fog_vertex:kp,fog_pars_vertex:Hp,fog_fragment:Gp,fog_pars_fragment:Vp,gradientmap_pars_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:Zp,lights_toon_fragment:Kp,lights_toon_pars_fragment:Jp,lights_phong_fragment:$p,lights_phong_pars_fragment:Qp,lights_physical_fragment:tm,lights_physical_pars_fragment:em,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:rm,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:lm,map_fragment:cm,map_pars_fragment:hm,map_particle_fragment:um,map_particle_pars_fragment:fm,metalnessmap_fragment:dm,metalnessmap_pars_fragment:pm,morphinstance_vertex:mm,morphcolor_vertex:_m,morphnormal_vertex:gm,morphtarget_pars_vertex:vm,morphtarget_vertex:xm,normal_fragment_begin:ym,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:Em,normal_vertex:Tm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Rm,opaque_fragment:Pm,packing:Lm,premultiplied_alpha_fragment:Dm,project_vertex:Im,dithering_fragment:Um,dithering_pars_fragment:Nm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:zm,shadowmap_vertex:km,shadowmask_pars_fragment:Hm,skinbase_vertex:Gm,skinning_pars_vertex:Vm,skinning_vertex:Wm,skinnormal_vertex:Xm,specularmap_fragment:qm,specularmap_pars_fragment:Ym,tonemapping_fragment:Zm,tonemapping_pars_fragment:jm,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:$m,uv_pars_vertex:Qm,uv_vertex:t_,worldpos_vertex:e_,background_vert:n_,background_frag:i_,backgroundCube_vert:r_,backgroundCube_frag:s_,cube_vert:o_,cube_frag:a_,depth_vert:l_,depth_frag:c_,distanceRGBA_vert:h_,distanceRGBA_frag:u_,equirect_vert:f_,equirect_frag:d_,linedashed_vert:p_,linedashed_frag:m_,meshbasic_vert:__,meshbasic_frag:g_,meshlambert_vert:v_,meshlambert_frag:x_,meshmatcap_vert:y_,meshmatcap_frag:M_,meshnormal_vert:S_,meshnormal_frag:E_,meshphong_vert:T_,meshphong_frag:b_,meshphysical_vert:w_,meshphysical_frag:A_,meshtoon_vert:C_,meshtoon_frag:R_,points_vert:P_,points_frag:L_,shadow_vert:D_,shadow_frag:I_,sprite_vert:U_,sprite_frag:N_},xt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},wn={basic:{uniforms:Fe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Fe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Fe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Fe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Fe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Fe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Fe([xt.points,xt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Fe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Fe([xt.common,xt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Fe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Fe([xt.sprite,xt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Fe([xt.common,xt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Fe([xt.lights,xt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};wn.physical={uniforms:Fe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const ks={r:0,b:0,g:0},Ai=new Pn,O_=new ae;function F_(r,t,e,n,i,s,o){const a=new Xt(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const v=g(S);v===null?p(a,l):v&&v.isColor&&(p(v,1),x=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===vo)?(h===void 0&&(h=new Wt(new Xi(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Rr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ai.copy(x.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(Ai)),h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==Qt,(u!==v||f!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Wt(new So(2,2),new Zn({name:"BackgroundMaterial",uniforms:Rr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(ks,Mu(r)),n.buffers.color.setClear(ks.r,ks.g,ks.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function B_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(y,L,z,N,W){let q=!1;const H=u(N,z,L);s!==H&&(s=H,c(s.object)),q=d(y,N,z,W),q&&g(y,N,z,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(y,L,z,N),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,L,z){const N=z.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let H=q[N];return H===void 0&&(H=f(l()),q[N]=H),H}function f(y){const L=[],z=[],N=[];for(let W=0;W<e;W++)L[W]=0,z[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,L,z,N){const W=s.attributes,q=L.attributes;let H=0;const K=z.getAttributes();for(const V in K)if(K[V].location>=0){const U=W[V];let D=q[V];if(D===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(D=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(D=y.instanceColor)),U===void 0||U.attribute!==D||D&&U.data!==D.data)return!0;H++}return s.attributesNum!==H||s.index!==N}function g(y,L,z,N){const W={},q=L.attributes;let H=0;const K=z.getAttributes();for(const V in K)if(K[V].location>=0){let U=q[V];U===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(U=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(U=y.instanceColor));const D={};D.attribute=U,U&&U.data&&(D.data=U.data),W[V]=D,H++}s.attributes=W,s.attributesNum=H,s.index=N}function _(){const y=s.newAttributes;for(let L=0,z=y.length;L<z;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const z=s.newAttributes,N=s.enabledAttributes,W=s.attributeDivisors;z[y]=1,N[y]===0&&(r.enableVertexAttribArray(y),N[y]=1),W[y]!==L&&(r.vertexAttribDivisor(y,L),W[y]=L)}function S(){const y=s.newAttributes,L=s.enabledAttributes;for(let z=0,N=L.length;z<N;z++)L[z]!==y[z]&&(r.disableVertexAttribArray(z),L[z]=0)}function x(y,L,z,N,W,q,H){H===!0?r.vertexAttribIPointer(y,L,z,W,q):r.vertexAttribPointer(y,L,z,N,W,q)}function v(y,L,z,N){_();const W=N.attributes,q=z.getAttributes(),H=L.defaultAttributeValues;for(const K in q){const V=q[K];if(V.location>=0){let ft=W[K];if(ft===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),ft!==void 0){const U=ft.normalized,D=ft.itemSize,it=t.get(ft);if(it===void 0)continue;const pt=it.buffer,k=it.type,j=it.bytesPerElement,at=k===r.INT||k===r.UNSIGNED_INT||ft.gpuType===Pl;if(ft.isInterleavedBufferAttribute){const J=ft.data,lt=J.stride,yt=ft.offset;if(J.isInstancedInterleavedBuffer){for(let nt=0;nt<V.locationSize;nt++)p(V.location+nt,J.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let nt=0;nt<V.locationSize;nt++)m(V.location+nt);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let nt=0;nt<V.locationSize;nt++)x(V.location+nt,D/V.locationSize,k,U,lt*j,(yt+D/V.locationSize*nt)*j,at)}else{if(ft.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)p(V.location+J,ft.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let J=0;J<V.locationSize;J++)m(V.location+J);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let J=0;J<V.locationSize;J++)x(V.location+J,D/V.locationSize,k,U,D*j,D/V.locationSize*J*j,at)}}else if(H!==void 0){const U=H[K];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(V.location,U);break;case 3:r.vertexAttrib3fv(V.location,U);break;case 4:r.vertexAttrib4fv(V.location,U);break;default:r.vertexAttrib1fv(V.location,U)}}}}S()}function P(){A();for(const y in n){const L=n[y];for(const z in L){const N=L[z];for(const W in N)h(N[W].object),delete N[W];delete L[z]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const z in L){const N=L[z];for(const W in N)h(N[W].object),delete N[W];delete L[z]}delete n[y.id]}function b(y){for(const L in n){const z=n[L];if(z[y.id]===void 0)continue;const N=z[y.id];for(const W in N)h(N[W].object),delete N[W];delete z[y.id]}}function A(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function z_(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function k_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Sn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Yn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Wn&&!A)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:P,maxSamples:R}}function H_(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new si,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const S=s?0:n,x=S*4;let v=p.clippingState||null;l.value=v,v=h(g,f,x,d);for(let P=0;P!==x;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function G_(r){let t=new WeakMap;function e(o,a){return a===Ia?o.mapping=br:a===Ua&&(o.mapping=wr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ia||a===Ua)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qd(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class bu extends Su{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const dr=4,qc=[.125,.215,.35,.446,.526,.582],Ui=20,ta=new bu,Yc=new Xt;let ea=null,na=0,ia=0,ra=!1;const Li=(1+Math.sqrt(5))/2,hr=1/Li,Zc=[new I(-Li,hr,0),new I(Li,hr,0),new I(-hr,0,Li),new I(hr,0,Li),new I(0,Li,-hr),new I(0,Li,hr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class jc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),this._renderer.xr.enabled=ra,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===br||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:gs,format:Sn,colorSpace:Nr,depthBuffer:!1},i=Kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V_(s)),this._blurMaterial=W_(s,t,e)}return i}_compileMaterial(t){const e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,i){const a=new en(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Yc),h.toneMapping=ui,h.autoClear=!1;const d=new gi({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Wt(new Xi,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Yc),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Hs(i,S*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===br||t.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ta)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zc[(i-s-1)%Zc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Wt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ui;m>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let S=0;for(let b=0;b<Ui;++b){const A=b/_,M=Math.exp(-A*A/2);p.push(M),b===0?S+=M:b<m&&(S+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],P=3*v*(i>x-dr?i-x+dr:0),R=4*(this._cubeSize-v);Hs(e,P,R,3*v,2*v),l.setRenderTarget(e),l.render(u,ta)}}function V_(r){const t=[],e=[],n=[];let i=r;const s=r-dr+1+qc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-dr?l=qc[o-r+dr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let R=0;R<d;R++){const b=R%3*2/3-1,A=R>2?0:-1,M=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];S.set(M,_*g*R),x.set(f,m*g*R);const y=[R,R,R,R,R,R];v.set(y,p*g*R)}const P=new Oe;P.setAttribute("position",new mn(S,_)),P.setAttribute("uv",new mn(x,m)),P.setAttribute("faceIndex",new mn(v,p)),t.push(P),i>dr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kc(r,t,e){const n=new Vi(r,t,e);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function W_(r,t,e){const n=new Float32Array(Ui),i=new I(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Jc(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function $c(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X_(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ia||l===Ua,h=l===br||l===wr;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new jc(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new jc(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function q_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&jr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Y_(r,t,e,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,v=S.length;x<v;x+=3){const P=S[x+0],R=S[x+1],b=S[x+2];f.push(P,R,R,b,b,P)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const P=x+0,R=x+1,b=x+2;f.push(P,R,R,b,b,P)}}else return;const m=new(mu(f)?yu:xu)(f,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Z_(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function j_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function K_(r,t,e){const n=new WeakMap,i=new ee;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const b=new Float32Array(P*R*4*u),A=new gu(b,P,R,u);A.type=Wn,A.needsUpdate=!0;const M=v*4;for(let L=0;L<u;L++){const z=p[L],N=S[L],W=x[L],q=P*R*4*L;for(let H=0;H<z.count;H++){const K=H*M;g===!0&&(i.fromBufferAttribute(z,H),b[q+K+0]=i.x,b[q+K+1]=i.y,b[q+K+2]=i.z,b[q+K+3]=0),_===!0&&(i.fromBufferAttribute(N,H),b[q+K+4]=i.x,b[q+K+5]=i.y,b[q+K+6]=i.z,b[q+K+7]=0),m===!0&&(i.fromBufferAttribute(W,H),b[q+K+8]=i.x,b[q+K+9]=i.y,b[q+K+10]=i.z,b[q+K+11]=W.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new ht(P,R)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function J_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class wu extends Xe{constructor(t,e,n,i,s,o,a,l,c,h=xr){if(h!==xr&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xr&&(n=Gi),n===void 0&&h===Cr&&(n=Ar),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Au=new Xe,Qc=new wu(1,1),Cu=new gu,Ru=new Fd,Pu=new Eu,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),rh=new Float32Array(4);function Br(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=th[i];if(s===void 0&&(s=new Float32Array(i),th[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Se(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Eo(r,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function $_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Q_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2fv(this.addr,t),Se(e,t)}}function tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;r.uniform3fv(this.addr,t),Se(e,t)}}function eg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4fv(this.addr,t),Se(e,t)}}function ng(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;rh.set(n),r.uniformMatrix2fv(this.addr,!1,rh),Se(e,n)}}function ig(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;ih.set(n),r.uniformMatrix3fv(this.addr,!1,ih),Se(e,n)}}function rg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;nh.set(n),r.uniformMatrix4fv(this.addr,!1,nh),Se(e,n)}}function sg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function og(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2iv(this.addr,t),Se(e,t)}}function ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3iv(this.addr,t),Se(e,t)}}function lg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4iv(this.addr,t),Se(e,t)}}function cg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function hg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2uiv(this.addr,t),Se(e,t)}}function ug(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3uiv(this.addr,t),Se(e,t)}}function fg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4uiv(this.addr,t),Se(e,t)}}function dg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Qc.compareFunction=pu,s=Qc):s=Au,e.setTexture2D(t||s,i)}function pg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ru,i)}function mg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pu,i)}function _g(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cu,i)}function gg(r){switch(r){case 5126:return $_;case 35664:return Q_;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return rg;case 5124:case 35670:return sg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return _g}}function vg(r,t){r.uniform1fv(this.addr,t)}function xg(r,t){const e=Br(t,this.size,2);r.uniform2fv(this.addr,e)}function yg(r,t){const e=Br(t,this.size,3);r.uniform3fv(this.addr,e)}function Mg(r,t){const e=Br(t,this.size,4);r.uniform4fv(this.addr,e)}function Sg(r,t){const e=Br(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Eg(r,t){const e=Br(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Tg(r,t){const e=Br(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function bg(r,t){r.uniform1iv(this.addr,t)}function wg(r,t){r.uniform2iv(this.addr,t)}function Ag(r,t){r.uniform3iv(this.addr,t)}function Cg(r,t){r.uniform4iv(this.addr,t)}function Rg(r,t){r.uniform1uiv(this.addr,t)}function Pg(r,t){r.uniform2uiv(this.addr,t)}function Lg(r,t){r.uniform3uiv(this.addr,t)}function Dg(r,t){r.uniform4uiv(this.addr,t)}function Ig(r,t,e){const n=this.cache,i=t.length,s=Eo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Au,s[o])}function Ug(r,t,e){const n=this.cache,i=t.length,s=Eo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ru,s[o])}function Ng(r,t,e){const n=this.cache,i=t.length,s=Eo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Pu,s[o])}function Og(r,t,e){const n=this.cache,i=t.length,s=Eo(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Cu,s[o])}function Fg(r){switch(r){case 5126:return vg;case 35664:return xg;case 35665:return yg;case 35666:return Mg;case 35674:return Sg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return bg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Cg;case 5125:return Rg;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Og}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gg(e.type)}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}}class kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function sh(r,t){r.seq.push(t),r.map[t.id]=t}function Hg(r,t,e){const n=r.name,i=n.length;for(sa.lastIndex=0;;){const s=sa.exec(n),o=sa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){sh(e,c===void 0?new Bg(a,r,t):new zg(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new kg(a),sh(e,u)),e=u}}}class no{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Hg(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function oh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Gg=37297;let Vg=0;function Wg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ah=new kt;function Xg(r){Zt._getMatrix(ah,Zt.workingColorSpace,r);const t=`mat3( ${ah.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(r)){case xo:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function lh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Wg(r.getShaderSource(t),o)}else return i}function qg(r,t){const e=Xg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yg(r,t){let e;switch(t){case hd:e="Linear";break;case ud:e="Reinhard";break;case fd:e="Cineon";break;case eu:e="ACESFilmic";break;case pd:e="AgX";break;case md:e="Neutral";break;case dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new I;function Zg(){Zt.getLuminanceCoefficients(Gs);const r=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Kg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Kr(r){return r!==""}function ch(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(r){return r.replace($g,t0)}const Qg=new Map;function t0(r,t){let e=Gt[t];if(e===void 0){const n=Qg.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}const e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(r){return r.replace(e0,n0)}function n0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function fh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function i0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function r0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case br:case wr:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function o0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tu:t="ENVMAP_BLENDING_MULTIPLY";break;case ld:t="ENVMAP_BLENDING_MIX";break;case cd:t="ENVMAP_BLENDING_ADD";break}return t}function a0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function l0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=i0(e),c=r0(e),h=s0(e),u=o0(e),f=a0(e),d=jg(e),g=Kg(s),_=i.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(m=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Gt.tonemapping_pars_fragment:"",e.toneMapping!==ui?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),Zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),o=hl(o),o=ch(o,e),o=hh(o,e),a=hl(a),a=ch(a,e),a=hh(a,e),o=uh(o),a=uh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+o,v=S+p+a,P=oh(i,i.VERTEX_SHADER,x),R=oh(i,i.FRAGMENT_SHADER,v);i.attachShader(_,P),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(L){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(P).trim(),W=i.getShaderInfoLog(R).trim();let q=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,P,R);else{const K=lh(i,P,"vertex"),V=lh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+K+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||W==="")&&(H=!1);H&&(L.diagnostics={runnable:q,programLog:z,vertexShader:{log:N,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(P),i.deleteShader(R),A=new no(i,_),M=Jg(i,_)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Gg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let c0=0;class h0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new u0(t),e.set(t,n)),n}}class u0{constructor(t){this.id=c0++,this.code=t,this.usedTimes=0}}function f0(r,t,e,n,i,s,o){const a=new Ol,l=new h0,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,L,z,N){const W=z.fog,q=N.geometry,H=M.isMeshStandardMaterial?z.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),V=K&&K.mapping===vo?K.image.height:null,ft=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const U=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,D=U!==void 0?U.length:0;let it=0;q.morphAttributes.position!==void 0&&(it=1),q.morphAttributes.normal!==void 0&&(it=2),q.morphAttributes.color!==void 0&&(it=3);let pt,k,j,at;if(ft){const $t=wn[ft];pt=$t.vertexShader,k=$t.fragmentShader}else pt=M.vertexShader,k=M.fragmentShader,l.update(M),j=l.getVertexShaderID(M),at=l.getFragmentShaderID(M);const J=r.getRenderTarget(),lt=r.state.buffers.depth.getReversed(),yt=N.isInstancedMesh===!0,nt=N.isBatchedMesh===!0,Tt=!!M.map,X=!!M.matcap,et=!!K,C=!!M.aoMap,gt=!!M.lightMap,st=!!M.bumpMap,mt=!!M.normalMap,ut=!!M.displacementMap,It=!!M.emissiveMap,_t=!!M.metalnessMap,w=!!M.roughnessMap,E=M.anisotropy>0,G=M.clearcoat>0,Q=M.dispersion>0,ot=M.iridescence>0,tt=M.sheen>0,Rt=M.transmission>0,vt=E&&!!M.anisotropyMap,bt=G&&!!M.clearcoatMap,Vt=G&&!!M.clearcoatNormalMap,ct=G&&!!M.clearcoatRoughnessMap,At=ot&&!!M.iridescenceMap,Nt=ot&&!!M.iridescenceThicknessMap,Ot=tt&&!!M.sheenColorMap,Ct=tt&&!!M.sheenRoughnessMap,Yt=!!M.specularMap,Ht=!!M.specularColorMap,se=!!M.specularIntensityMap,O=Rt&&!!M.transmissionMap,Mt=Rt&&!!M.thicknessMap,$=!!M.gradientMap,rt=!!M.alphaMap,wt=M.alphaTest>0,St=!!M.alphaHash,Bt=!!M.extensions;let me=ui;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(me=r.toneMapping);const Re={shaderID:ft,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:k,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:nt,batchingColor:nt&&N._colorsTexture!==null,instancing:yt,instancingColor:yt&&N.instanceColor!==null,instancingMorph:yt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Nr,alphaToCoverage:!!M.alphaToCoverage,map:Tt,matcap:X,envMap:et,envMapMode:et&&K.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:gt,bumpMap:st,normalMap:mt,displacementMap:f&&ut,emissiveMap:It,normalMapObjectSpace:mt&&M.normalMapType===xd,normalMapTangentSpace:mt&&M.normalMapType===du,metalnessMap:_t,roughnessMap:w,anisotropy:E,anisotropyMap:vt,clearcoat:G,clearcoatMap:bt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:ct,dispersion:Q,iridescence:ot,iridescenceMap:At,iridescenceThicknessMap:Nt,sheen:tt,sheenColorMap:Ot,sheenRoughnessMap:Ct,specularMap:Yt,specularColorMap:Ht,specularIntensityMap:se,transmission:Rt,transmissionMap:O,thicknessMap:Mt,gradientMap:$,opaque:M.transparent===!1&&M.blending===vr&&M.alphaToCoverage===!1,alphaMap:rt,alphaTest:wt,alphaHash:St,combine:M.combine,mapUv:Tt&&_(M.map.channel),aoMapUv:C&&_(M.aoMap.channel),lightMapUv:gt&&_(M.lightMap.channel),bumpMapUv:st&&_(M.bumpMap.channel),normalMapUv:mt&&_(M.normalMap.channel),displacementMapUv:ut&&_(M.displacementMap.channel),emissiveMapUv:It&&_(M.emissiveMap.channel),metalnessMapUv:_t&&_(M.metalnessMap.channel),roughnessMapUv:w&&_(M.roughnessMap.channel),anisotropyMapUv:vt&&_(M.anisotropyMap.channel),clearcoatMapUv:bt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(M.sheenRoughnessMap.channel),specularMapUv:Yt&&_(M.specularMap.channel),specularColorMapUv:Ht&&_(M.specularColorMap.channel),specularIntensityMapUv:se&&_(M.specularIntensityMap.channel),transmissionMapUv:O&&_(M.transmissionMap.channel),thicknessMapUv:Mt&&_(M.thicknessMap.channel),alphaMapUv:rt&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(mt||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(Tt||rt),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:lt,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:it,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===Qt,decodeVideoTextureEmissive:It&&M.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(M.emissiveMap.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===De,flipSided:M.side===We,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Bt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&M.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(S(y,M),x(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const y=g[M.type];let L;if(y){const z=wn[y];L=jd.clone(z.uniforms)}else L=M.uniforms;return L}function P(M,y){let L;for(let z=0,N=h.length;z<N;z++){const W=h[z];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new l0(r,y,M,s),h.push(L)),L}function R(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function b(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:R,releaseShaderCache:b,programs:h,dispose:A}}function d0(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function p0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function dh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ph(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||p0),n.length>1&&n.sort(f||dh),i.length>1&&i.sort(f||dh)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function m0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ph,r.set(n,[o])):i>=s.length?(o=new ph,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function _0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Xt};break;case"SpotLight":e={position:new I,direction:new I,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function g0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let v0=0;function x0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function y0(r){const t=new _0,e=g0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new ae,o=new ae;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,x=0,v=0,P=0,R=0,b=0;c.sort(x0);for(let M=0,y=c.length;M<y;M++){const L=c[M],z=L.color,N=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*N,u+=z.g*N,f+=z.b*N;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],N);b++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=L.shadow.matrix,S++}n.directional[d]=H,d++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(z).multiplyScalar(N),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const K=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,K.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=K.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,v++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(z).multiplyScalar(N),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const K=L.shadow,V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(N),H.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==S||A.numPointShadows!==x||A.numSpotShadows!==v||A.numSpotMaps!==P||A.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,A.directionalLength=d,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=S,A.numPointShadows=x,A.numSpotShadows=v,A.numSpotMaps=P,A.numLightProbes=b,n.version=v0++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function mh(r){const t=new y0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function M0(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new mh(r),t.set(i,[a])):s>=o.length?(a=new mh(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class S0 extends Fr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class E0 extends Fr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w0(r,t,e){let n=new Fl;const i=new ht,s=new ht,o=new ee,a=new S0({depthPacking:vd}),l=new E0,c={},h=e.maxTextureSize,u={[_i]:We,[We]:_i,[De]:De},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:T0,fragmentShader:b0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let p=this.type;this.render=function(R,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=r.getRenderTarget(),y=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),z=r.state;z.setBlending(hi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=p!==Hn&&this.type===Hn,W=p===Hn&&this.type!==Hn;for(let q=0,H=R.length;q<H;q++){const K=R[q],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ft=V.getFrameExtents();if(i.multiply(ft),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ft.x),i.x=s.x*ft.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ft.y),i.y=s.y*ft.y,V.mapSize.y=s.y)),V.map===null||N===!0||W===!0){const D=this.type!==Hn?{minFilter:En,magFilter:En}:{};V.map!==null&&V.map.dispose(),V.map=new Vi(i.x,i.y,D),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const U=V.getViewportCount();for(let D=0;D<U;D++){const it=V.getViewport(D);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),z.viewport(o),V.updateMatrices(K,D),n=V.getFrustum(),v(b,A,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Hn&&S(V,A),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,y,L)};function S(R,b){const A=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Vi(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(b,null,A,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(b,null,A,d,_,null)}function x(R,b,A,M){let y=null;const L=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=A.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=y.uuid,N=b.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let q=W[N];q===void 0&&(q=y.clone(),W[N]=q,b.addEventListener("dispose",P)),y=q}if(y.visible=b.visible,y.wireframe=b.wireframe,M===Hn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:u[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=r.properties.get(y);z.light=A}return y}function v(R,b,A,M,y){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Hn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const N=t.update(R),W=R.material;if(Array.isArray(W)){const q=N.groups;for(let H=0,K=q.length;H<K;H++){const V=q[H],ft=W[V.materialIndex];if(ft&&ft.visible){const U=x(R,ft,M,y);R.onBeforeShadow(r,R,b,A,N,U,V),r.renderBufferDirect(A,null,N,U,R,V),R.onAfterShadow(r,R,b,A,N,U,V)}}}else if(W.visible){const q=x(R,W,M,y);R.onBeforeShadow(r,R,b,A,N,q,null),r.renderBufferDirect(A,null,N,q,R,null),R.onAfterShadow(r,R,b,A,N,q,null)}}const z=R.children;for(let N=0,W=z.length;N<W;N++)v(z[N],b,A,M,y)}function P(R){R.target.removeEventListener("dispose",P);for(const A in c){const M=c[A],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const A0={[wa]:Aa,[Ca]:La,[Ra]:Da,[Tr]:Pa,[Aa]:wa,[La]:Ca,[Da]:Ra,[Pa]:Tr};function C0(r,t){function e(){let O=!1;const Mt=new ee;let $=null;const rt=new ee(0,0,0,0);return{setMask:function(wt){$!==wt&&!O&&(r.colorMask(wt,wt,wt,wt),$=wt)},setLocked:function(wt){O=wt},setClear:function(wt,St,Bt,me,Re){Re===!0&&(wt*=me,St*=me,Bt*=me),Mt.set(wt,St,Bt,me),rt.equals(Mt)===!1&&(r.clearColor(wt,St,Bt,me),rt.copy(Mt))},reset:function(){O=!1,$=null,rt.set(-1,0,0,0)}}}function n(){let O=!1,Mt=!1,$=null,rt=null,wt=null;return{setReversed:function(St){if(Mt!==St){const Bt=t.get("EXT_clip_control");Mt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const me=wt;wt=null,this.setClear(me)}Mt=St},getReversed:function(){return Mt},setTest:function(St){St?J(r.DEPTH_TEST):lt(r.DEPTH_TEST)},setMask:function(St){$!==St&&!O&&(r.depthMask(St),$=St)},setFunc:function(St){if(Mt&&(St=A0[St]),rt!==St){switch(St){case wa:r.depthFunc(r.NEVER);break;case Aa:r.depthFunc(r.ALWAYS);break;case Ca:r.depthFunc(r.LESS);break;case Tr:r.depthFunc(r.LEQUAL);break;case Ra:r.depthFunc(r.EQUAL);break;case Pa:r.depthFunc(r.GEQUAL);break;case La:r.depthFunc(r.GREATER);break;case Da:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}rt=St}},setLocked:function(St){O=St},setClear:function(St){wt!==St&&(Mt&&(St=1-St),r.clearDepth(St),wt=St)},reset:function(){O=!1,$=null,rt=null,wt=null,Mt=!1}}}function i(){let O=!1,Mt=null,$=null,rt=null,wt=null,St=null,Bt=null,me=null,Re=null;return{setTest:function($t){O||($t?J(r.STENCIL_TEST):lt(r.STENCIL_TEST))},setMask:function($t){Mt!==$t&&!O&&(r.stencilMask($t),Mt=$t)},setFunc:function($t,_n,Un){($!==$t||rt!==_n||wt!==Un)&&(r.stencilFunc($t,_n,Un),$=$t,rt=_n,wt=Un)},setOp:function($t,_n,Un){(St!==$t||Bt!==_n||me!==Un)&&(r.stencilOp($t,_n,Un),St=$t,Bt=_n,me=Un)},setLocked:function($t){O=$t},setClear:function($t){Re!==$t&&(r.clearStencil($t),Re=$t)},reset:function(){O=!1,Mt=null,$=null,rt=null,wt=null,St=null,Bt=null,me=null,Re=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,P=null,R=null,b=new Xt(0,0,0),A=0,M=!1,y=null,L=null,z=null,N=null,W=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=K>=2);let ft=null,U={};const D=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),pt=new ee().fromArray(D),k=new ee().fromArray(it);function j(O,Mt,$,rt){const wt=new Uint8Array(4),St=r.createTexture();r.bindTexture(O,St),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<$;Bt++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(Mt,0,r.RGBA,1,1,rt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(Mt+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return St}const at={};at[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc(Tr),st(!1),mt(yc),J(r.CULL_FACE),C(hi);function J(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function lt(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function yt(O,Mt){return u[O]!==Mt?(r.bindFramebuffer(O,Mt),u[O]=Mt,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Mt),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Mt),!0):!1}function nt(O,Mt){let $=d,rt=!1;if(O){$=f.get(Mt),$===void 0&&($=[],f.set(Mt,$));const wt=O.textures;if($.length!==wt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Bt=wt.length;St<Bt;St++)$[St]=r.COLOR_ATTACHMENT0+St;$.length=wt.length,rt=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,rt=!0);rt&&r.drawBuffers($)}function Tt(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const X={[Ii]:r.FUNC_ADD,[Xf]:r.FUNC_SUBTRACT,[qf]:r.FUNC_REVERSE_SUBTRACT};X[Yf]=r.MIN,X[Zf]=r.MAX;const et={[jf]:r.ZERO,[Kf]:r.ONE,[Jf]:r.SRC_COLOR,[Ta]:r.SRC_ALPHA,[id]:r.SRC_ALPHA_SATURATE,[ed]:r.DST_COLOR,[Qf]:r.DST_ALPHA,[$f]:r.ONE_MINUS_SRC_COLOR,[ba]:r.ONE_MINUS_SRC_ALPHA,[nd]:r.ONE_MINUS_DST_COLOR,[td]:r.ONE_MINUS_DST_ALPHA,[rd]:r.CONSTANT_COLOR,[sd]:r.ONE_MINUS_CONSTANT_COLOR,[od]:r.CONSTANT_ALPHA,[ad]:r.ONE_MINUS_CONSTANT_ALPHA};function C(O,Mt,$,rt,wt,St,Bt,me,Re,$t){if(O===hi){_===!0&&(lt(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),O!==Wf){if(O!==m||$t!==M){if((p!==Ii||v!==Ii)&&(r.blendEquation(r.FUNC_ADD),p=Ii,v=Ii),$t)switch(O){case vr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ea:r.blendFunc(r.ONE,r.ONE);break;case Mc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case vr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ea:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Mc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,x=null,P=null,R=null,b.set(0,0,0),A=0,m=O,M=$t}return}wt=wt||Mt,St=St||$,Bt=Bt||rt,(Mt!==p||wt!==v)&&(r.blendEquationSeparate(X[Mt],X[wt]),p=Mt,v=wt),($!==S||rt!==x||St!==P||Bt!==R)&&(r.blendFuncSeparate(et[$],et[rt],et[St],et[Bt]),S=$,x=rt,P=St,R=Bt),(me.equals(b)===!1||Re!==A)&&(r.blendColor(me.r,me.g,me.b,Re),b.copy(me),A=Re),m=O,M=!1}function gt(O,Mt){O.side===De?lt(r.CULL_FACE):J(r.CULL_FACE);let $=O.side===We;Mt&&($=!$),st($),O.blending===vr&&O.transparent===!1?C(hi):C(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const rt=O.stencilWrite;a.setTest(rt),rt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),It(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(O){y!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),y=O)}function mt(O){O!==Hf?(J(r.CULL_FACE),O!==L&&(O===yc?r.cullFace(r.BACK):O===Gf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):lt(r.CULL_FACE),L=O}function ut(O){O!==z&&(H&&r.lineWidth(O),z=O)}function It(O,Mt,$){O?(J(r.POLYGON_OFFSET_FILL),(N!==Mt||W!==$)&&(r.polygonOffset(Mt,$),N=Mt,W=$)):lt(r.POLYGON_OFFSET_FILL)}function _t(O){O?J(r.SCISSOR_TEST):lt(r.SCISSOR_TEST)}function w(O){O===void 0&&(O=r.TEXTURE0+q-1),ft!==O&&(r.activeTexture(O),ft=O)}function E(O,Mt,$){$===void 0&&(ft===null?$=r.TEXTURE0+q-1:$=ft);let rt=U[$];rt===void 0&&(rt={type:void 0,texture:void 0},U[$]=rt),(rt.type!==O||rt.texture!==Mt)&&(ft!==$&&(r.activeTexture($),ft=$),r.bindTexture(O,Mt||at[O]),rt.type=O,rt.texture=Mt)}function G(){const O=U[ft];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(O){pt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),pt.copy(O))}function Ct(O){k.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),k.copy(O))}function Yt(O,Mt){let $=c.get(Mt);$===void 0&&($=new WeakMap,c.set(Mt,$));let rt=$.get(O);rt===void 0&&(rt=r.getUniformBlockIndex(Mt,O.name),$.set(O,rt))}function Ht(O,Mt){const rt=c.get(Mt).get(O);l.get(Mt)!==rt&&(r.uniformBlockBinding(Mt,rt,O.__bindingPointIndex),l.set(Mt,rt))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ft=null,U={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,P=null,R=null,b=new Xt(0,0,0),A=0,M=!1,y=null,L=null,z=null,N=null,W=null,pt.set(0,0,r.canvas.width,r.canvas.height),k.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:lt,bindFramebuffer:yt,drawBuffers:nt,useProgram:Tt,setBlending:C,setMaterial:gt,setFlipSided:st,setCullFace:mt,setLineWidth:ut,setPolygonOffset:It,setScissorTest:_t,activeTexture:w,bindTexture:E,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:ot,texImage2D:At,texImage3D:Nt,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:Vt,texStorage3D:ct,texSubImage2D:tt,texSubImage3D:Rt,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Ot,viewport:Ct,reset:se}}function _h(r,t,e,n){const i=R0(n);switch(e){case ou:return r*t;case lu:return r*t;case cu:return r*t*2;case hu:return r*t/i.components*i.byteLength;case Il:return r*t/i.components*i.byteLength;case uu:return r*t*2/i.components*i.byteLength;case Ul:return r*t*2/i.components*i.byteLength;case au:return r*t*3/i.components*i.byteLength;case Sn:return r*t*4/i.components*i.byteLength;case Nl:return r*t*4/i.components*i.byteLength;case Ks:case Js:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $s:case Qs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ba:case ka:return Math.max(r,16)*Math.max(t,8)/4;case Fa:case za:return Math.max(r,8)*Math.max(t,8)/2;case Ha:case Ga:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case to:case rl:case sl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case fu:case ol:return Math.ceil(r/4)*Math.ceil(t/4)*8;case al:case ll:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function R0(r){switch(r){case Yn:case iu:return{byteLength:1,components:1};case rs:case ru:case gs:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case Gi:case Pl:case Wn:return{byteLength:4,components:1};case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function P0(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return d?new OffscreenCanvas(w,E):lo("canvas")}function _(w,E,G){let Q=1;const ot=_t(w);if((ot.width>G||ot.height>G)&&(Q=G/Math.max(ot.width,ot.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const tt=Math.floor(Q*ot.width),Rt=Math.floor(Q*ot.height);u===void 0&&(u=g(tt,Rt));const vt=E?g(tt,Rt):u;return vt.width=tt,vt.height=Rt,vt.getContext("2d").drawImage(w,0,0,tt,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+tt+"x"+Rt+")."),vt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(w,E,G,Q,ot=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=E;if(E===r.RED&&(G===r.FLOAT&&(tt=r.R32F),G===r.HALF_FLOAT&&(tt=r.R16F),G===r.UNSIGNED_BYTE&&(tt=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.R8UI),G===r.UNSIGNED_SHORT&&(tt=r.R16UI),G===r.UNSIGNED_INT&&(tt=r.R32UI),G===r.BYTE&&(tt=r.R8I),G===r.SHORT&&(tt=r.R16I),G===r.INT&&(tt=r.R32I)),E===r.RG&&(G===r.FLOAT&&(tt=r.RG32F),G===r.HALF_FLOAT&&(tt=r.RG16F),G===r.UNSIGNED_BYTE&&(tt=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.RG8UI),G===r.UNSIGNED_SHORT&&(tt=r.RG16UI),G===r.UNSIGNED_INT&&(tt=r.RG32UI),G===r.BYTE&&(tt=r.RG8I),G===r.SHORT&&(tt=r.RG16I),G===r.INT&&(tt=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),G===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),G===r.UNSIGNED_INT&&(tt=r.RGB32UI),G===r.BYTE&&(tt=r.RGB8I),G===r.SHORT&&(tt=r.RGB16I),G===r.INT&&(tt=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),G===r.UNSIGNED_INT&&(tt=r.RGBA32UI),G===r.BYTE&&(tt=r.RGBA8I),G===r.SHORT&&(tt=r.RGBA16I),G===r.INT&&(tt=r.RGBA32I)),E===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),E===r.RGBA){const Rt=ot?xo:Zt.getTransfer(Q);G===r.FLOAT&&(tt=r.RGBA32F),G===r.HALF_FLOAT&&(tt=r.RGBA16F),G===r.UNSIGNED_BYTE&&(tt=Rt===Qt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(w,E){let G;return w?E===null||E===Gi||E===Ar?G=r.DEPTH24_STENCIL8:E===Wn?G=r.DEPTH32F_STENCIL8:E===rs&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===Ar?G=r.DEPTH_COMPONENT24:E===Wn?G=r.DEPTH_COMPONENT32F:E===rs&&(G=r.DEPTH_COMPONENT16),G}function P(w,E){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==En&&w.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function R(w){const E=w.target;E.removeEventListener("dispose",R),A(E),E.isVideoTexture&&h.delete(E)}function b(w){const E=w.target;E.removeEventListener("dispose",b),y(E)}function A(w){const E=n.get(w);if(E.__webglInit===void 0)return;const G=w.source,Q=f.get(G);if(Q){const ot=Q[E.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&M(w),Object.keys(Q).length===0&&f.delete(G)}n.remove(w)}function M(w){const E=n.get(w);r.deleteTexture(E.__webglTexture);const G=w.source,Q=f.get(G);delete Q[E.__cacheKey],o.memory.textures--}function y(w){const E=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ot=0;ot<E.__webglFramebuffer[Q].length;ot++)r.deleteFramebuffer(E.__webglFramebuffer[Q][ot]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=w.textures;for(let Q=0,ot=G.length;Q<ot;Q++){const tt=n.get(G[Q]);tt.__webglTexture&&(r.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(w)}let L=0;function z(){L=0}function N(){const w=L;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),L+=1,w}function W(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function q(w,E){const G=n.get(w);if(w.isVideoTexture&&ut(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(G,w,E);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function H(w,E){const G=n.get(w);if(w.version>0&&G.__version!==w.version){k(G,w,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function K(w,E){const G=n.get(w);if(w.version>0&&G.__version!==w.version){k(G,w,E);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function V(w,E){const G=n.get(w);if(w.version>0&&G.__version!==w.version){j(G,w,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}const ft={[Na]:r.REPEAT,[Ni]:r.CLAMP_TO_EDGE,[Oa]:r.MIRRORED_REPEAT},U={[En]:r.NEAREST,[_d]:r.NEAREST_MIPMAP_NEAREST,[Ss]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[Do]:r.LINEAR_MIPMAP_NEAREST,[Oi]:r.LINEAR_MIPMAP_LINEAR},D={[yd]:r.NEVER,[wd]:r.ALWAYS,[Md]:r.LESS,[pu]:r.LEQUAL,[Sd]:r.EQUAL,[bd]:r.GEQUAL,[Ed]:r.GREATER,[Td]:r.NOTEQUAL};function it(w,E){if(E.type===Wn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===Do||E.magFilter===Ss||E.magFilter===Oi||E.minFilter===Cn||E.minFilter===Do||E.minFilter===Ss||E.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,ft[E.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ft[E.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ft[E.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,U[E.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,D[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==Ss&&E.minFilter!==Oi||E.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function pt(w,E){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",R));const Q=E.source;let ot=f.get(Q);ot===void 0&&(ot={},f.set(Q,ot));const tt=W(E);if(tt!==w.__cacheKey){ot[tt]===void 0&&(ot[tt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ot[tt].usedTimes++;const Rt=ot[w.__cacheKey];Rt!==void 0&&(ot[w.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(E)),w.__cacheKey=tt,w.__webglTexture=ot[tt].texture}return G}function k(w,E,G){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const ot=pt(w,E),tt=E.source;e.bindTexture(Q,w.__webglTexture,r.TEXTURE0+G);const Rt=n.get(tt);if(tt.version!==Rt.__version||ot===!0){e.activeTexture(r.TEXTURE0+G);const vt=Zt.getPrimaries(Zt.workingColorSpace),bt=E.colorSpace===oi?null:Zt.getPrimaries(E.colorSpace),Vt=E.colorSpace===oi||vt===bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let ct=_(E.image,!1,i.maxTextureSize);ct=It(E,ct);const At=s.convert(E.format,E.colorSpace),Nt=s.convert(E.type);let Ot=x(E.internalFormat,At,Nt,E.colorSpace,E.isVideoTexture);it(Q,E);let Ct;const Yt=E.mipmaps,Ht=E.isVideoTexture!==!0,se=Rt.__version===void 0||ot===!0,O=tt.dataReady,Mt=P(E,ct);if(E.isDepthTexture)Ot=v(E.format===Cr,E.type),se&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,Ot,ct.width,ct.height):e.texImage2D(r.TEXTURE_2D,0,Ot,ct.width,ct.height,0,At,Nt,null));else if(E.isDataTexture)if(Yt.length>0){Ht&&se&&e.texStorage2D(r.TEXTURE_2D,Mt,Ot,Yt[0].width,Yt[0].height);for(let $=0,rt=Yt.length;$<rt;$++)Ct=Yt[$],Ht?O&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Ct.width,Ct.height,At,Nt,Ct.data):e.texImage2D(r.TEXTURE_2D,$,Ot,Ct.width,Ct.height,0,At,Nt,Ct.data);E.generateMipmaps=!1}else Ht?(se&&e.texStorage2D(r.TEXTURE_2D,Mt,Ot,ct.width,ct.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct.width,ct.height,At,Nt,ct.data)):e.texImage2D(r.TEXTURE_2D,0,Ot,ct.width,ct.height,0,At,Nt,ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ht&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Mt,Ot,Yt[0].width,Yt[0].height,ct.depth);for(let $=0,rt=Yt.length;$<rt;$++)if(Ct=Yt[$],E.format!==Sn)if(At!==null)if(Ht){if(O)if(E.layerUpdates.size>0){const wt=_h(Ct.width,Ct.height,E.format,E.type);for(const St of E.layerUpdates){const Bt=Ct.data.subarray(St*wt/Ct.data.BYTES_PER_ELEMENT,(St+1)*wt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,St,Ct.width,Ct.height,1,At,Bt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,ct.depth,At,Ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Ot,Ct.width,Ct.height,ct.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,ct.depth,At,Nt,Ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Ot,Ct.width,Ct.height,ct.depth,0,At,Nt,Ct.data)}else{Ht&&se&&e.texStorage2D(r.TEXTURE_2D,Mt,Ot,Yt[0].width,Yt[0].height);for(let $=0,rt=Yt.length;$<rt;$++)Ct=Yt[$],E.format!==Sn?At!==null?Ht?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,Ct.width,Ct.height,At,Ct.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Ot,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Ct.width,Ct.height,At,Nt,Ct.data):e.texImage2D(r.TEXTURE_2D,$,Ot,Ct.width,Ct.height,0,At,Nt,Ct.data)}else if(E.isDataArrayTexture)if(Ht){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Mt,Ot,ct.width,ct.height,ct.depth),O)if(E.layerUpdates.size>0){const $=_h(ct.width,ct.height,E.format,E.type);for(const rt of E.layerUpdates){const wt=ct.data.subarray(rt*$/ct.data.BYTES_PER_ELEMENT,(rt+1)*$/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,rt,ct.width,ct.height,1,At,Nt,wt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,At,Nt,ct.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,ct.width,ct.height,ct.depth,0,At,Nt,ct.data);else if(E.isData3DTexture)Ht?(se&&e.texStorage3D(r.TEXTURE_3D,Mt,Ot,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,At,Nt,ct.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,ct.width,ct.height,ct.depth,0,At,Nt,ct.data);else if(E.isFramebufferTexture){if(se)if(Ht)e.texStorage2D(r.TEXTURE_2D,Mt,Ot,ct.width,ct.height);else{let $=ct.width,rt=ct.height;for(let wt=0;wt<Mt;wt++)e.texImage2D(r.TEXTURE_2D,wt,Ot,$,rt,0,At,Nt,null),$>>=1,rt>>=1}}else if(Yt.length>0){if(Ht&&se){const $=_t(Yt[0]);e.texStorage2D(r.TEXTURE_2D,Mt,Ot,$.width,$.height)}for(let $=0,rt=Yt.length;$<rt;$++)Ct=Yt[$],Ht?O&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,At,Nt,Ct):e.texImage2D(r.TEXTURE_2D,$,Ot,At,Nt,Ct);E.generateMipmaps=!1}else if(Ht){if(se){const $=_t(ct);e.texStorage2D(r.TEXTURE_2D,Mt,Ot,$.width,$.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Nt,ct)}else e.texImage2D(r.TEXTURE_2D,0,Ot,At,Nt,ct);m(E)&&p(Q),Rt.__version=tt.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function j(w,E,G){if(E.image.length!==6)return;const Q=pt(w,E),ot=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+G);const tt=n.get(ot);if(ot.version!==tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);const Rt=Zt.getPrimaries(Zt.workingColorSpace),vt=E.colorSpace===oi?null:Zt.getPrimaries(E.colorSpace),bt=E.colorSpace===oi||Rt===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,ct=E.image[0]&&E.image[0].isDataTexture,At=[];for(let rt=0;rt<6;rt++)!Vt&&!ct?At[rt]=_(E.image[rt],!0,i.maxCubemapSize):At[rt]=ct?E.image[rt].image:E.image[rt],At[rt]=It(E,At[rt]);const Nt=At[0],Ot=s.convert(E.format,E.colorSpace),Ct=s.convert(E.type),Yt=x(E.internalFormat,Ot,Ct,E.colorSpace),Ht=E.isVideoTexture!==!0,se=tt.__version===void 0||Q===!0,O=ot.dataReady;let Mt=P(E,Nt);it(r.TEXTURE_CUBE_MAP,E);let $;if(Vt){Ht&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,Yt,Nt.width,Nt.height);for(let rt=0;rt<6;rt++){$=At[rt].mipmaps;for(let wt=0;wt<$.length;wt++){const St=$[wt];E.format!==Sn?Ot!==null?Ht?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,St.width,St.height,Ot,St.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,Yt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,St.width,St.height,Ot,Ct,St.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,Yt,St.width,St.height,0,Ot,Ct,St.data)}}}else{if($=E.mipmaps,Ht&&se){$.length>0&&Mt++;const rt=_t(At[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,Yt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ct){Ht?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,At[rt].width,At[rt].height,Ot,Ct,At[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Yt,At[rt].width,At[rt].height,0,Ot,Ct,At[rt].data);for(let wt=0;wt<$.length;wt++){const Bt=$[wt].image[rt].image;Ht?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,Bt.width,Bt.height,Ot,Ct,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,Yt,Bt.width,Bt.height,0,Ot,Ct,Bt.data)}}else{Ht?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,Ct,At[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Yt,Ot,Ct,At[rt]);for(let wt=0;wt<$.length;wt++){const St=$[wt];Ht?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,Ot,Ct,St.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,Yt,Ot,Ct,St.image[rt])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),tt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function at(w,E,G,Q,ot,tt){const Rt=s.convert(G.format,G.colorSpace),vt=s.convert(G.type),bt=x(G.internalFormat,Rt,vt,G.colorSpace),Vt=n.get(E),ct=n.get(G);if(ct.__renderTarget=E,!Vt.__hasExternalTextures){const At=Math.max(1,E.width>>tt),Nt=Math.max(1,E.height>>tt);ot===r.TEXTURE_3D||ot===r.TEXTURE_2D_ARRAY?e.texImage3D(ot,tt,bt,At,Nt,E.depth,0,Rt,vt,null):e.texImage2D(ot,tt,bt,At,Nt,0,Rt,vt,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),mt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,ot,ct.__webglTexture,0,st(E)):(ot===r.TEXTURE_2D||ot>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,ot,ct.__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function J(w,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,w),E.depthBuffer){const Q=E.depthTexture,ot=Q&&Q.isDepthTexture?Q.type:null,tt=v(E.stencilBuffer,ot),Rt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=st(E);mt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,tt,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,tt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,tt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,w)}else{const Q=E.textures;for(let ot=0;ot<Q.length;ot++){const tt=Q[ot],Rt=s.convert(tt.format,tt.colorSpace),vt=s.convert(tt.type),bt=x(tt.internalFormat,Rt,vt,tt.colorSpace),Vt=st(E);G&&mt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,bt,E.width,E.height):mt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Vt,bt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,bt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const ot=Q.__webglTexture,tt=st(E);if(E.depthTexture.format===xr)mt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0);else if(E.depthTexture.format===Cr)mt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function yt(w){const E=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ot=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ot)};Q.addEventListener("dispose",ot),E.__depthDisposeCallback=ot}E.__boundDepthTexture=Q}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");lt(E.__webglFramebuffer,w)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=r.createRenderbuffer(),J(E.__webglDepthbuffer[Q],w,!1);else{const ot=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=E.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),J(E.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ot)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(w,E,G){const Q=n.get(w);E!==void 0&&at(Q.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&yt(w)}function Tt(w){const E=w.texture,G=n.get(w),Q=n.get(E);w.addEventListener("dispose",b);const ot=w.textures,tt=w.isWebGLCubeRenderTarget===!0,Rt=ot.length>1;if(Rt||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,o.memory.textures++),tt){G.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[vt]=[];for(let bt=0;bt<E.mipmaps.length;bt++)G.__webglFramebuffer[vt][bt]=r.createFramebuffer()}else G.__webglFramebuffer[vt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)G.__webglFramebuffer[vt]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Rt)for(let vt=0,bt=ot.length;vt<bt;vt++){const Vt=n.get(ot[vt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=r.createTexture(),o.memory.textures++)}if(w.samples>0&&mt(w)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let vt=0;vt<ot.length;vt++){const bt=ot[vt];G.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[vt]);const Vt=s.convert(bt.format,bt.colorSpace),ct=s.convert(bt.type),At=x(bt.internalFormat,Vt,ct,bt.colorSpace,w.isXRRenderTarget===!0),Nt=st(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,At,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,G.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),J(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),it(r.TEXTURE_CUBE_MAP,E);for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)at(G.__webglFramebuffer[vt][bt],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else at(G.__webglFramebuffer[vt],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(E)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let vt=0,bt=ot.length;vt<bt;vt++){const Vt=ot[vt],ct=n.get(Vt);e.bindTexture(r.TEXTURE_2D,ct.__webglTexture),it(r.TEXTURE_2D,Vt),at(G.__webglFramebuffer,w,Vt,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),m(Vt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let vt=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(vt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,Q.__webglTexture),it(vt,E),E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)at(G.__webglFramebuffer[bt],w,E,r.COLOR_ATTACHMENT0,vt,bt);else at(G.__webglFramebuffer,w,E,r.COLOR_ATTACHMENT0,vt,0);m(E)&&p(vt),e.unbindTexture()}w.depthBuffer&&yt(w)}function X(w){const E=w.textures;for(let G=0,Q=E.length;G<Q;G++){const ot=E[G];if(m(ot)){const tt=S(w),Rt=n.get(ot).__webglTexture;e.bindTexture(tt,Rt),p(tt),e.unbindTexture()}}}const et=[],C=[];function gt(w){if(w.samples>0){if(mt(w)===!1){const E=w.textures,G=w.width,Q=w.height;let ot=r.COLOR_BUFFER_BIT;const tt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=n.get(w),vt=E.length>1;if(vt)for(let bt=0;bt<E.length;bt++)e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let bt=0;bt<E.length;bt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ot|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ot|=r.STENCIL_BUFFER_BIT)),vt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);const Vt=n.get(E[bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Vt,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,ot,r.NEAREST),l===!0&&(et.length=0,C.length=0,et.push(r.COLOR_ATTACHMENT0+bt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(et.push(tt),C.push(tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,C)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let bt=0;bt<E.length;bt++){e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);const Vt=n.get(E[bt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.TEXTURE_2D,Vt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const E=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function st(w){return Math.min(i.maxSamples,w.samples)}function mt(w){const E=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(w){const E=o.render.frame;h.get(w)!==E&&(h.set(w,E),w.update())}function It(w,E){const G=w.colorSpace,Q=w.format,ot=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==Nr&&G!==oi&&(Zt.getTransfer(G)===Qt?(Q!==Sn||ot!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function _t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=nt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=mt}function L0(r,t){function e(n,i=oi){let s;const o=Zt.getTransfer(i);if(n===Yn)return r.UNSIGNED_BYTE;if(n===Ll)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===su)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return r.BYTE;if(n===ru)return r.SHORT;if(n===rs)return r.UNSIGNED_SHORT;if(n===Pl)return r.INT;if(n===Gi)return r.UNSIGNED_INT;if(n===Wn)return r.FLOAT;if(n===gs)return r.HALF_FLOAT;if(n===ou)return r.ALPHA;if(n===au)return r.RGB;if(n===Sn)return r.RGBA;if(n===lu)return r.LUMINANCE;if(n===cu)return r.LUMINANCE_ALPHA;if(n===xr)return r.DEPTH_COMPONENT;if(n===Cr)return r.DEPTH_STENCIL;if(n===hu)return r.RED;if(n===Il)return r.RED_INTEGER;if(n===uu)return r.RG;if(n===Ul)return r.RG_INTEGER;if(n===Nl)return r.RGBA_INTEGER;if(n===Ks||n===Js||n===$s||n===Qs)if(o===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ks)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ks)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Ba||n===za||n===ka)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===Va)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ha||n===Ga)return o===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Va)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===ja||n===Ka||n===Ja||n===$a||n===Qa||n===tl||n===el||n===nl||n===il)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wa)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===rl||n===sl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===to)return o===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===ol||n===al||n===ll)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===to)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class D0 extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Te extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I0={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class O0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Xe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Zn({vertexShader:U0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new So(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends Zi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new O0,m=e.getContextAttributes();let p=null,S=null;const x=[],v=[],P=new ht;let R=null;const b=new en;b.viewport=new ee;const A=new en;A.viewport=new ee;const M=[b,A],y=new D0;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=x[k];return j===void 0&&(j=new oa,x[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=x[k];return j===void 0&&(j=new oa,x[k]=j),j.getGripSpace()},this.getHand=function(k){let j=x[k];return j===void 0&&(j=new oa,x[k]=j),j.getHandSpace()};function N(k){const j=v.indexOf(k.inputSource);if(j===-1)return;const at=x[j];at!==void 0&&(at.update(k.inputSource,k.frame,c||o),at.dispatchEvent({type:k.type,data:k.inputSource}))}function W(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let k=0;k<x.length;k++){const j=v[k];j!==null&&(v[k]=null,x[k].disconnect(j))}L=null,z=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,S=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Vi(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,at=null,J=null;m.depth&&(J=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Cr:xr,at=m.stencil?Ar:Gi);const lt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(lt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Vi(f.textureWidth,f.textureHeight,{format:Sn,type:Yn,depthTexture:new wu(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(k){for(let j=0;j<k.removed.length;j++){const at=k.removed[j],J=v.indexOf(at);J>=0&&(v[J]=null,x[J].disconnect(at))}for(let j=0;j<k.added.length;j++){const at=k.added[j];let J=v.indexOf(at);if(J===-1){for(let yt=0;yt<x.length;yt++)if(yt>=v.length){v.push(at),J=yt;break}else if(v[yt]===null){v[yt]=at,J=yt;break}if(J===-1)break}const lt=x[J];lt&&lt.connect(at)}}const H=new I,K=new I;function V(k,j,at){H.setFromMatrixPosition(j.matrixWorld),K.setFromMatrixPosition(at.matrixWorld);const J=H.distanceTo(K),lt=j.projectionMatrix.elements,yt=at.projectionMatrix.elements,nt=lt[14]/(lt[10]-1),Tt=lt[14]/(lt[10]+1),X=(lt[9]+1)/lt[5],et=(lt[9]-1)/lt[5],C=(lt[8]-1)/lt[0],gt=(yt[8]+1)/yt[0],st=nt*C,mt=nt*gt,ut=J/(-C+gt),It=ut*-C;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(It),k.translateZ(ut),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),lt[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const _t=nt+ut,w=Tt+ut,E=st-It,G=mt+(J-It),Q=X*Tt/w*_t,ot=et*Tt/w*_t;k.projectionMatrix.makePerspective(E,G,Q,ot,_t,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ft(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let j=k.near,at=k.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(at=_.depthFar)),y.near=A.near=b.near=j,y.far=A.far=b.far=at,(L!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,z=y.far),b.layers.mask=k.layers.mask|2,A.layers.mask=k.layers.mask|4,y.layers.mask=b.layers.mask|A.layers.mask;const J=k.parent,lt=y.cameras;ft(y,J);for(let yt=0;yt<lt.length;yt++)ft(lt[yt],J);lt.length===2?V(y,b,A):y.projectionMatrix.copy(b.projectionMatrix),U(k,y,J)};function U(k,j,at){at===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(at.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=cl*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let D=null;function it(k,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const at=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let J=!1;at.length!==y.cameras.length&&(y.cameras.length=0,J=!0);for(let yt=0;yt<at.length;yt++){const nt=at[yt];let Tt=null;if(d!==null)Tt=d.getViewport(nt);else{const et=u.getViewSubImage(f,nt);Tt=et.viewport,yt===0&&(t.setRenderTargetTextures(S,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(S))}let X=M[yt];X===void 0&&(X=new en,X.layers.enable(yt),X.viewport=new ee,M[yt]=X),X.matrix.fromArray(nt.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(nt.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),yt===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),J===!0&&y.cameras.push(X)}const lt=i.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const yt=u.getDepthInformation(at[0]);yt&&yt.isValid&&yt.texture&&_.init(t,yt,i.renderState)}}for(let at=0;at<x.length;at++){const J=v[at],lt=x[at];J!==null&&lt!==void 0&&lt.update(J,j,c||o)}D&&D(k,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const pt=new Tu;pt.setAnimationLoop(it),this.setAnimationLoop=function(k){D=k},this.dispose=function(){}}}const Ci=new Pn,B0=new ae;function z0(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(B0.makeRotationFromEuler(Ci)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k0(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function c(S,x){let v=i[S.id];v===void 0&&(g(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",m));const P=x.program;n.updateUBOMapping(S,P);const R=t.render.frame;s[S.id]!==R&&(f(S),s[S.id]=R)}function h(S){const x=u();S.__bindingPointIndex=x;const v=r.createBuffer(),P=S.__size,R=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,P,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],v=S.uniforms,P=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let R=0,b=v.length;R<b;R++){const A=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,y=A.length;M<y;M++){const L=A[M];if(d(L,R,M,P)===!0){const z=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<N.length;q++){const H=N[q],K=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,z+W,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,v,P){const R=S.value,b=x+"_"+v;if(P[b]===void 0)return typeof R=="number"||typeof R=="boolean"?P[b]=R:P[b]=R.clone(),!0;{const A=P[b];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return P[b]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function g(S){const x=S.uniforms;let v=0;const P=16;for(let b=0,A=x.length;b<A;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,L=M.length;y<L;y++){const z=M[y],N=Array.isArray(z.value)?z.value:[z.value];for(let W=0,q=N.length;W<q;W++){const H=N[W],K=_(H),V=v%P,ft=V%K.boundary,U=V+ft;v+=ft,U!==0&&P-U<K.storage&&(v+=P-U),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=K.storage}}}const R=v%P;return R>0&&(v+=P-R),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class H0{constructor(t={}){const{canvas:e=Rd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=ui,this.toneMappingExposure=1;const v=this;let P=!1,R=0,b=0,A=null,M=-1,y=null;const L=new ee,z=new ee;let N=null;const W=new Xt(0);let q=0,H=e.width,K=e.height,V=1,ft=null,U=null;const D=new ee(0,0,H,K),it=new ee(0,0,H,K);let pt=!1;const k=new Fl;let j=!1,at=!1;const J=new ae,lt=new ae,yt=new I,nt=new ee,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function et(){return A===null?V:1}let C=n;function gt(T,F){return e.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rl}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",St,!1),C===null){const F="webgl2";if(C=gt(F,T),C===null)throw gt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let st,mt,ut,It,_t,w,E,G,Q,ot,tt,Rt,vt,bt,Vt,ct,At,Nt,Ot,Ct,Yt,Ht,se,O;function Mt(){st=new q_(C),st.init(),Ht=new L0(C,st),mt=new k_(C,st,t,Ht),ut=new C0(C,st),mt.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),It=new j_(C),_t=new d0,w=new P0(C,st,ut,_t,mt,Ht,It),E=new G_(v),G=new X_(v),Q=new np(C),se=new B_(C,Q),ot=new Y_(C,Q,It,se),tt=new J_(C,ot,Q,It),Ot=new K_(C,mt,w),ct=new H_(_t),Rt=new f0(v,E,G,st,mt,se,ct),vt=new z0(v,_t),bt=new m0,Vt=new M0(st),Nt=new F_(v,E,G,ut,tt,d,l),At=new w0(v,tt,mt),O=new k0(C,It,mt,ut),Ct=new z_(C,st,It),Yt=new Z_(C,st,It),It.programs=Rt.programs,v.capabilities=mt,v.extensions=st,v.properties=_t,v.renderLists=bt,v.shadowMap=At,v.state=ut,v.info=It}Mt();const $=new F0(v,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(H,K,!1))},this.getSize=function(T){return T.set(H,K)},this.setSize=function(T,F,Y=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,K=F,e.width=Math.floor(T*V),e.height=Math.floor(F*V),Y===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(H*V,K*V).floor()},this.setDrawingBufferSize=function(T,F,Y){H=T,K=F,V=Y,e.width=Math.floor(T*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,F,Y,Z){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,F,Y,Z),ut.viewport(L.copy(D).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,F,Y,Z){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,F,Y,Z),ut.scissor(z.copy(it).multiplyScalar(V).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(T){ut.setScissorTest(pt=T)},this.setOpaqueSort=function(T){ft=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(T=!0,F=!0,Y=!0){let Z=0;if(T){let B=!1;if(A!==null){const dt=A.texture.format;B=dt===Nl||dt===Ul||dt===Il}if(B){const dt=A.texture.type,Et=dt===Yn||dt===Gi||dt===rs||dt===Ar||dt===Ll||dt===Dl,Pt=Nt.getClearColor(),Lt=Nt.getClearAlpha(),Ft=Pt.r,zt=Pt.g,Dt=Pt.b;Et?(g[0]=Ft,g[1]=zt,g[2]=Dt,g[3]=Lt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Ft,_[1]=zt,_[2]=Dt,_[3]=Lt,C.clearBufferiv(C.COLOR,0,_))}else Z|=C.COLOR_BUFFER_BIT}F&&(Z|=C.DEPTH_BUFFER_BIT),Y&&(Z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),bt.dispose(),Vt.dispose(),_t.dispose(),E.dispose(),G.dispose(),tt.dispose(),se.dispose(),O.dispose(),Rt.dispose(),$.dispose(),$.removeEventListener("sessionstart",fc),$.removeEventListener("sessionend",dc),Si.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=It.autoReset,F=At.enabled,Y=At.autoUpdate,Z=At.needsUpdate,B=At.type;Mt(),It.autoReset=T,At.enabled=F,At.autoUpdate=Y,At.needsUpdate=Z,At.type=B}function St(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bt(T){const F=T.target;F.removeEventListener("dispose",Bt),me(F)}function me(T){Re(T),_t.remove(T)}function Re(T){const F=_t.get(T).programs;F!==void 0&&(F.forEach(function(Y){Rt.releaseProgram(Y)}),T.isShaderMaterial&&Rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Y,Z,B,dt){F===null&&(F=Tt);const Et=B.isMesh&&B.matrixWorld.determinant()<0,Pt=Bf(T,F,Y,Z,B);ut.setMaterial(Z,Et);let Lt=Y.index,Ft=1;if(Z.wireframe===!0){if(Lt=ot.getWireframeAttribute(Y),Lt===void 0)return;Ft=2}const zt=Y.drawRange,Dt=Y.attributes.position;let jt=zt.start*Ft,oe=(zt.start+zt.count)*Ft;dt!==null&&(jt=Math.max(jt,dt.start*Ft),oe=Math.min(oe,(dt.start+dt.count)*Ft)),Lt!==null?(jt=Math.max(jt,0),oe=Math.min(oe,Lt.count)):Dt!=null&&(jt=Math.max(jt,0),oe=Math.min(oe,Dt.count));const le=oe-jt;if(le<0||le===1/0)return;se.setup(B,Z,Pt,Y,Lt);let Be,Kt=Ct;if(Lt!==null&&(Be=Q.get(Lt),Kt=Yt,Kt.setIndex(Be)),B.isMesh)Z.wireframe===!0?(ut.setLineWidth(Z.wireframeLinewidth*et()),Kt.setMode(C.LINES)):Kt.setMode(C.TRIANGLES);else if(B.isLine){let Ut=Z.linewidth;Ut===void 0&&(Ut=1),ut.setLineWidth(Ut*et()),B.isLineSegments?Kt.setMode(C.LINES):B.isLineLoop?Kt.setMode(C.LINE_LOOP):Kt.setMode(C.LINE_STRIP)}else B.isPoints?Kt.setMode(C.POINTS):B.isSprite&&Kt.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Kt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Kt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ut=B._multiDrawStarts,Nn=B._multiDrawCounts,Jt=B._multiDrawCount,gn=Lt?Q.get(Lt).bytesPerElement:1,Ki=_t.get(Z).currentProgram.getUniforms();for(let Je=0;Je<Jt;Je++)Ki.setValue(C,"_gl_DrawID",Je),Kt.render(Ut[Je]/gn,Nn[Je])}else if(B.isInstancedMesh)Kt.renderInstances(jt,le,B.count);else if(Y.isInstancedBufferGeometry){const Ut=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Nn=Math.min(Y.instanceCount,Ut);Kt.renderInstances(jt,le,Nn)}else Kt.render(jt,le)};function $t(T,F,Y){T.transparent===!0&&T.side===De&&T.forceSinglePass===!1?(T.side=We,T.needsUpdate=!0,Ms(T,F,Y),T.side=_i,T.needsUpdate=!0,Ms(T,F,Y),T.side=De):Ms(T,F,Y)}this.compile=function(T,F,Y=null){Y===null&&(Y=T),p=Vt.get(Y),p.init(F),x.push(p),Y.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==Y&&T.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Z=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const dt=B.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const Pt=dt[Et];$t(Pt,Y,B),Z.add(Pt)}else $t(dt,Y,B),Z.add(dt)}),x.pop(),p=null,Z},this.compileAsync=function(T,F,Y=null){const Z=this.compile(T,F,Y);return new Promise(B=>{function dt(){if(Z.forEach(function(Et){_t.get(Et).currentProgram.isReady()&&Z.delete(Et)}),Z.size===0){B(T);return}setTimeout(dt,10)}st.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let _n=null;function Un(T){_n&&_n(T)}function fc(){Si.stop()}function dc(){Si.start()}const Si=new Tu;Si.setAnimationLoop(Un),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(T){_n=T,$.setAnimationLoop(T),T===null?Si.stop():Si.start()},$.addEventListener("sessionstart",fc),$.addEventListener("sessionend",dc),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,A),p=Vt.get(T,x.length),p.init(F),x.push(p),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),k.setFromProjectionMatrix(lt),at=this.localClippingEnabled,j=ct.init(this.clippingPlanes,at),m=bt.get(T,S.length),m.init(),S.push(m),$.enabled===!0&&$.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&Lo(dt,F,-1/0,v.sortObjects)}Lo(T,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ft,U),X=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,X&&Nt.addToRenderList(m,T),this.info.render.frame++,j===!0&&ct.beginShadows();const Y=p.state.shadowsArray;At.render(Y,T,F),j===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const dt=F.cameras;if(B.length>0)for(let Et=0,Pt=dt.length;Et<Pt;Et++){const Lt=dt[Et];mc(Z,B,T,Lt)}X&&Nt.render(T);for(let Et=0,Pt=dt.length;Et<Pt;Et++){const Lt=dt[Et];pc(m,T,Lt,Lt.viewport)}}else B.length>0&&mc(Z,B,T,F),X&&Nt.render(T),pc(m,T,F);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,F),se.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],j===!0&&ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Lo(T,F,Y,Z){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||k.intersectsSprite(T)){Z&&nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(lt);const Et=tt.update(T),Pt=T.material;Pt.visible&&m.push(T,Et,Pt,Y,nt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||k.intersectsObject(T))){const Et=tt.update(T),Pt=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),nt.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),nt.copy(Et.boundingSphere.center)),nt.applyMatrix4(T.matrixWorld).applyMatrix4(lt)),Array.isArray(Pt)){const Lt=Et.groups;for(let Ft=0,zt=Lt.length;Ft<zt;Ft++){const Dt=Lt[Ft],jt=Pt[Dt.materialIndex];jt&&jt.visible&&m.push(T,Et,jt,Y,nt.z,Dt)}}else Pt.visible&&m.push(T,Et,Pt,Y,nt.z,null)}}const dt=T.children;for(let Et=0,Pt=dt.length;Et<Pt;Et++)Lo(dt[Et],F,Y,Z)}function pc(T,F,Y,Z){const B=T.opaque,dt=T.transmissive,Et=T.transparent;p.setupLightsView(Y),j===!0&&ct.setGlobalState(v.clippingPlanes,Y),Z&&ut.viewport(L.copy(Z)),B.length>0&&ys(B,F,Y),dt.length>0&&ys(dt,F,Y),Et.length>0&&ys(Et,F,Y),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function mc(T,F,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Vi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?gs:Yn,minFilter:Oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const dt=p.state.transmissionRenderTarget[Z.id],Et=Z.viewport||L;dt.setSize(Et.z,Et.w);const Pt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(W),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),X&&Nt.render(Y);const Lt=v.toneMapping;v.toneMapping=ui;const Ft=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),j===!0&&ct.setGlobalState(v.clippingPlanes,Z),ys(T,Y,Z),w.updateMultisampleRenderTarget(dt),w.updateRenderTargetMipmap(dt),st.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Dt=0,jt=F.length;Dt<jt;Dt++){const oe=F[Dt],le=oe.object,Be=oe.geometry,Kt=oe.material,Ut=oe.group;if(Kt.side===De&&le.layers.test(Z.layers)){const Nn=Kt.side;Kt.side=We,Kt.needsUpdate=!0,_c(le,Y,Z,Be,Kt,Ut),Kt.side=Nn,Kt.needsUpdate=!0,zt=!0}}zt===!0&&(w.updateMultisampleRenderTarget(dt),w.updateRenderTargetMipmap(dt))}v.setRenderTarget(Pt),v.setClearColor(W,q),Ft!==void 0&&(Z.viewport=Ft),v.toneMapping=Lt}function ys(T,F,Y){const Z=F.isScene===!0?F.overrideMaterial:null;for(let B=0,dt=T.length;B<dt;B++){const Et=T[B],Pt=Et.object,Lt=Et.geometry,Ft=Z===null?Et.material:Z,zt=Et.group;Pt.layers.test(Y.layers)&&_c(Pt,F,Y,Lt,Ft,zt)}}function _c(T,F,Y,Z,B,dt){T.onBeforeRender(v,F,Y,Z,B,dt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,F,Y,Z,T,dt),B.transparent===!0&&B.side===De&&B.forceSinglePass===!1?(B.side=We,B.needsUpdate=!0,v.renderBufferDirect(Y,F,Z,B,T,dt),B.side=_i,B.needsUpdate=!0,v.renderBufferDirect(Y,F,Z,B,T,dt),B.side=De):v.renderBufferDirect(Y,F,Z,B,T,dt),T.onAfterRender(v,F,Y,Z,B,dt)}function Ms(T,F,Y){F.isScene!==!0&&(F=Tt);const Z=_t.get(T),B=p.state.lights,dt=p.state.shadowsArray,Et=B.state.version,Pt=Rt.getParameters(T,B.state,dt,F,Y),Lt=Rt.getProgramCacheKey(Pt);let Ft=Z.programs;Z.environment=T.isMeshStandardMaterial?F.environment:null,Z.fog=F.fog,Z.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",Bt),Ft=new Map,Z.programs=Ft);let zt=Ft.get(Lt);if(zt!==void 0){if(Z.currentProgram===zt&&Z.lightsStateVersion===Et)return vc(T,Pt),zt}else Pt.uniforms=Rt.getUniforms(T),T.onBeforeCompile(Pt,v),zt=Rt.acquireProgram(Pt,Lt),Ft.set(Lt,zt),Z.uniforms=Pt.uniforms;const Dt=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=ct.uniform),vc(T,Pt),Z.needsLights=kf(T),Z.lightsStateVersion=Et,Z.needsLights&&(Dt.ambientLightColor.value=B.state.ambient,Dt.lightProbe.value=B.state.probe,Dt.directionalLights.value=B.state.directional,Dt.directionalLightShadows.value=B.state.directionalShadow,Dt.spotLights.value=B.state.spot,Dt.spotLightShadows.value=B.state.spotShadow,Dt.rectAreaLights.value=B.state.rectArea,Dt.ltc_1.value=B.state.rectAreaLTC1,Dt.ltc_2.value=B.state.rectAreaLTC2,Dt.pointLights.value=B.state.point,Dt.pointLightShadows.value=B.state.pointShadow,Dt.hemisphereLights.value=B.state.hemi,Dt.directionalShadowMap.value=B.state.directionalShadowMap,Dt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Dt.spotShadowMap.value=B.state.spotShadowMap,Dt.spotLightMatrix.value=B.state.spotLightMatrix,Dt.spotLightMap.value=B.state.spotLightMap,Dt.pointShadowMap.value=B.state.pointShadowMap,Dt.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=zt,Z.uniformsList=null,zt}function gc(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=no.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function vc(T,F){const Y=_t.get(T);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Bf(T,F,Y,Z,B){F.isScene!==!0&&(F=Tt),w.resetTextureUnits();const dt=F.fog,Et=Z.isMeshStandardMaterial?F.environment:null,Pt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nr,Lt=(Z.isMeshStandardMaterial?G:E).get(Z.envMap||Et),Ft=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,zt=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Dt=!!Y.morphAttributes.position,jt=!!Y.morphAttributes.normal,oe=!!Y.morphAttributes.color;let le=ui;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(le=v.toneMapping);const Be=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Kt=Be!==void 0?Be.length:0,Ut=_t.get(Z),Nn=p.state.lights;if(j===!0&&(at===!0||T!==y)){const cn=T===y&&Z.id===M;ct.setState(Z,T,cn)}let Jt=!1;Z.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Nn.state.version||Ut.outputColorSpace!==Pt||B.isBatchedMesh&&Ut.batching===!1||!B.isBatchedMesh&&Ut.batching===!0||B.isBatchedMesh&&Ut.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ut.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ut.instancing===!1||!B.isInstancedMesh&&Ut.instancing===!0||B.isSkinnedMesh&&Ut.skinning===!1||!B.isSkinnedMesh&&Ut.skinning===!0||B.isInstancedMesh&&Ut.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ut.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ut.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ut.instancingMorph===!1&&B.morphTexture!==null||Ut.envMap!==Lt||Z.fog===!0&&Ut.fog!==dt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ct.numPlanes||Ut.numIntersection!==ct.numIntersection)||Ut.vertexAlphas!==Ft||Ut.vertexTangents!==zt||Ut.morphTargets!==Dt||Ut.morphNormals!==jt||Ut.morphColors!==oe||Ut.toneMapping!==le||Ut.morphTargetsCount!==Kt)&&(Jt=!0):(Jt=!0,Ut.__version=Z.version);let gn=Ut.currentProgram;Jt===!0&&(gn=Ms(Z,F,B));let Ki=!1,Je=!1,kr=!1;const ce=gn.getUniforms(),Tn=Ut.uniforms;if(ut.useProgram(gn.program)&&(Ki=!0,Je=!0,kr=!0),Z.id!==M&&(M=Z.id,Je=!0),Ki||y!==T){ut.buffers.depth.getReversed()?(J.copy(T.projectionMatrix),Ld(J),Dd(J),ce.setValue(C,"projectionMatrix",J)):ce.setValue(C,"projectionMatrix",T.projectionMatrix),ce.setValue(C,"viewMatrix",T.matrixWorldInverse);const Jn=ce.map.cameraPosition;Jn!==void 0&&Jn.setValue(C,yt.setFromMatrixPosition(T.matrixWorld)),mt.logarithmicDepthBuffer&&ce.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ce.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Je=!0,kr=!0)}if(B.isSkinnedMesh){ce.setOptional(C,B,"bindMatrix"),ce.setOptional(C,B,"bindMatrixInverse");const cn=B.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),ce.setValue(C,"boneTexture",cn.boneTexture,w))}B.isBatchedMesh&&(ce.setOptional(C,B,"batchingTexture"),ce.setValue(C,"batchingTexture",B._matricesTexture,w),ce.setOptional(C,B,"batchingIdTexture"),ce.setValue(C,"batchingIdTexture",B._indirectTexture,w),ce.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&ce.setValue(C,"batchingColorTexture",B._colorsTexture,w));const Hr=Y.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0)&&Ot.update(B,Y,gn),(Je||Ut.receiveShadow!==B.receiveShadow)&&(Ut.receiveShadow=B.receiveShadow,ce.setValue(C,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Tn.envMap.value=Lt,Tn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&F.environment!==null&&(Tn.envMapIntensity.value=F.environmentIntensity),Je&&(ce.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&zf(Tn,kr),dt&&Z.fog===!0&&vt.refreshFogUniforms(Tn,dt),vt.refreshMaterialUniforms(Tn,Z,V,K,p.state.transmissionRenderTarget[T.id]),no.upload(C,gc(Ut),Tn,w)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(no.upload(C,gc(Ut),Tn,w),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ce.setValue(C,"center",B.center),ce.setValue(C,"modelViewMatrix",B.modelViewMatrix),ce.setValue(C,"normalMatrix",B.normalMatrix),ce.setValue(C,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const cn=Z.uniformsGroups;for(let Jn=0,$n=cn.length;Jn<$n;Jn++){const xc=cn[Jn];O.update(xc,gn),O.bind(xc,gn)}}return gn}function zf(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function kf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,Y){_t.get(T.texture).__webglTexture=F,_t.get(T.depthTexture).__webglTexture=Y;const Z=_t.get(T);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const Y=_t.get(T);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Y=0){A=T,R=F,b=Y;let Z=!0,B=null,dt=!1,Et=!1;if(T){const Lt=_t.get(T);if(Lt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(C.FRAMEBUFFER,null),Z=!1;else if(Lt.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(Lt.__hasExternalTextures)w.rebindTextures(T,_t.get(T.texture).__webglTexture,_t.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Dt=T.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&_t.has(Dt)&&(T.width!==Dt.image.width||T.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const Ft=T.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Et=!0);const zt=_t.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?B=zt[F][Y]:B=zt[F],dt=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?B=_t.get(T).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[Y]:B=zt,L.copy(T.viewport),z.copy(T.scissor),N=T.scissorTest}else L.copy(D).multiplyScalar(V).floor(),z.copy(it).multiplyScalar(V).floor(),N=pt;if(ut.bindFramebuffer(C.FRAMEBUFFER,B)&&Z&&ut.drawBuffers(T,B),ut.viewport(L),ut.scissor(z),ut.setScissorTest(N),dt){const Lt=_t.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Lt.__webglTexture,Y)}else if(Et){const Lt=_t.get(T.texture),Ft=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Lt.__webglTexture,Y||0,Ft)}M=-1},this.readRenderTargetPixels=function(T,F,Y,Z,B,dt,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=_t.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){ut.bindFramebuffer(C.FRAMEBUFFER,Pt);try{const Lt=T.texture,Ft=Lt.format,zt=Lt.type;if(!mt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-Z&&Y>=0&&Y<=T.height-B&&C.readPixels(F,Y,Z,B,Ht.convert(Ft),Ht.convert(zt),dt)}finally{const Lt=A!==null?_t.get(A).__webglFramebuffer:null;ut.bindFramebuffer(C.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(T,F,Y,Z,B,dt,Et){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=_t.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){const Lt=T.texture,Ft=Lt.format,zt=Lt.type;if(!mt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-Z&&Y>=0&&Y<=T.height-B){ut.bindFramebuffer(C.FRAMEBUFFER,Pt);const Dt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.bufferData(C.PIXEL_PACK_BUFFER,dt.byteLength,C.STREAM_READ),C.readPixels(F,Y,Z,B,Ht.convert(Ft),Ht.convert(zt),0);const jt=A!==null?_t.get(A).__webglFramebuffer:null;ut.bindFramebuffer(C.FRAMEBUFFER,jt);const oe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Pd(C,oe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Dt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,dt),C.deleteBuffer(Dt),C.deleteSync(oe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,Y=0){T.isTexture!==!0&&(jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const Z=Math.pow(2,-Y),B=Math.floor(T.image.width*Z),dt=Math.floor(T.image.height*Z),Et=F!==null?F.x:0,Pt=F!==null?F.y:0;w.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,Y,0,0,Et,Pt,B,dt),ut.unbindTexture()},this.copyTextureToTexture=function(T,F,Y=null,Z=null,B=0){T.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1],F=arguments[2],B=arguments[3]||0,Y=null);let dt,Et,Pt,Lt,Ft,zt,Dt,jt,oe;const le=T.isCompressedTexture?T.mipmaps[B]:T.image;Y!==null?(dt=Y.max.x-Y.min.x,Et=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,Lt=Y.min.x,Ft=Y.min.y,zt=Y.isBox3?Y.min.z:0):(dt=le.width,Et=le.height,Pt=le.depth||1,Lt=0,Ft=0,zt=0),Z!==null?(Dt=Z.x,jt=Z.y,oe=Z.z):(Dt=0,jt=0,oe=0);const Be=Ht.convert(F.format),Kt=Ht.convert(F.type);let Ut;F.isData3DTexture?(w.setTexture3D(F,0),Ut=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(w.setTexture2DArray(F,0),Ut=C.TEXTURE_2D_ARRAY):(w.setTexture2D(F,0),Ut=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Nn=C.getParameter(C.UNPACK_ROW_LENGTH),Jt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),gn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ki=C.getParameter(C.UNPACK_SKIP_ROWS),Je=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,le.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Lt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zt);const kr=T.isDataArrayTexture||T.isData3DTexture,ce=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Tn=_t.get(T),Hr=_t.get(F),cn=_t.get(Tn.__renderTarget),Jn=_t.get(Hr.__renderTarget);ut.bindFramebuffer(C.READ_FRAMEBUFFER,cn.__webglFramebuffer),ut.bindFramebuffer(C.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let $n=0;$n<Pt;$n++)kr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(T).__webglTexture,B,zt+$n),T.isDepthTexture?(ce&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(F).__webglTexture,B,oe+$n),C.blitFramebuffer(Lt,Ft,dt,Et,Dt,jt,dt,Et,C.DEPTH_BUFFER_BIT,C.NEAREST)):ce?C.copyTexSubImage3D(Ut,B,Dt,jt,oe+$n,Lt,Ft,dt,Et):C.copyTexSubImage2D(Ut,B,Dt,jt,oe+$n,Lt,Ft,dt,Et);ut.bindFramebuffer(C.READ_FRAMEBUFFER,null),ut.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ce?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Ut,B,Dt,jt,oe,dt,Et,Pt,Be,Kt,le.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Ut,B,Dt,jt,oe,dt,Et,Pt,Be,le.data):C.texSubImage3D(Ut,B,Dt,jt,oe,dt,Et,Pt,Be,Kt,le):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,B,Dt,jt,dt,Et,Be,Kt,le.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,B,Dt,jt,le.width,le.height,Be,le.data):C.texSubImage2D(C.TEXTURE_2D,B,Dt,jt,dt,Et,Be,Kt,le);C.pixelStorei(C.UNPACK_ROW_LENGTH,Nn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Jt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,gn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ki),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Je),B===0&&F.generateMipmaps&&C.generateMipmap(Ut),ut.unbindTexture()},this.copyTextureToTexture3D=function(T,F,Y=null,Z=null,B=0){return T.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,T=arguments[2],F=arguments[3],B=arguments[4]||0),jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,Y,Z,B)},this.initRenderTarget=function(T){_t.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){R=0,b=0,A=null,ut.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class G0 extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class V0 extends Fr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gh=new ae,ul=new Mo,Vs=new yo,Ws=new I;class W0 extends be{constructor(t=new Oe,e=new V0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=s,t.ray.intersectsSphere(Vs)===!1)return;gh.copy(i).invert(),ul.copy(t.ray).applyMatrix4(gh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Ws.fromBufferAttribute(u,m),vh(Ws,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ws.fromBufferAttribute(u,g),vh(Ws,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vh(r,t,e,n,i,s,o){const a=ul.distanceSqToPoint(r);if(a<e){const l=new I;ul.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ht:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],s=[],o=[],a=new I,l=new ae;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ae(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ae(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zl extends In{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class X0 extends zl{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kl(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Xs=new I,aa=new kl,la=new kl,ca=new kl;class q0 extends In{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Xs.subVectors(i[0],i[1]).add(i[0]),c=Xs);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Xs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),aa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),la.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),ca.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(aa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),la.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ca.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(aa.calc(l),la.calc(l),ca.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xh(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Y0(r,t){const e=1-r;return e*e*t}function Z0(r,t){return 2*(1-r)*r*t}function j0(r,t){return r*r*t}function Qr(r,t,e,n){return Y0(r,t)+Z0(r,e)+j0(r,n)}function K0(r,t){const e=1-r;return e*e*e*t}function J0(r,t){const e=1-r;return 3*e*e*r*t}function $0(r,t){return 3*(1-r)*r*r*t}function Q0(r,t){return r*r*r*t}function ts(r,t,e,n,i){return K0(r,t)+J0(r,e)+$0(r,n)+Q0(r,i)}class Lu extends In{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ts(t,i.x,s.x,o.x,a.x),ts(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hl extends In{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ts(t,i.x,s.x,o.x,a.x),ts(t,i.y,s.y,o.y,a.y),ts(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Du extends In{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tv extends In{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends In{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Qr(t,i.x,s.x,o.x),Qr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uu extends In{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Qr(t,i.x,s.x,o.x),Qr(t,i.y,s.y,o.y),Qr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(xh(a,l.x,c.x,h.x,u.x),xh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var co=Object.freeze({__proto__:null,ArcCurve:X0,CatmullRomCurve3:q0,CubicBezierCurve:Lu,CubicBezierCurve3:Hl,EllipseCurve:zl,LineCurve:Du,LineCurve3:tv,QuadraticBezierCurve:Iu,QuadraticBezierCurve3:Uu,SplineCurve:Nu});class ev extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new co[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new co[i.type]().fromJSON(i))}return this}}class yh extends ev{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Du(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Iu(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Lu(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Nu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new zl(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zr extends Oe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function S(){const v=new I,P=new I;let R=0;const b=(e-t)/n;for(let A=0;A<=s;A++){const M=[],y=A/s,L=y*(e-t)+t;for(let z=0;z<=i;z++){const N=z/i,W=N*l+a,q=Math.sin(W),H=Math.cos(W);P.x=L*q,P.y=-y*n+m,P.z=L*H,u.push(P.x,P.y,P.z),v.set(q,b,H).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-y),M.push(g++)}_.push(M)}for(let A=0;A<i;A++)for(let M=0;M<s;M++){const y=_[M][A],L=_[M+1][A],z=_[M+1][A+1],N=_[M][A+1];(t>0||M!==0)&&(h.push(y,L,N),R+=3),(e>0||M!==s-1)&&(h.push(L,z,N),R+=3)}c.addGroup(p,R,0),p+=R}function x(v){const P=g,R=new ht,b=new I;let A=0;const M=v===!0?t:e,y=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const L=g;for(let z=0;z<=i;z++){const W=z/i*l+a,q=Math.cos(W),H=Math.sin(W);b.x=M*H,b.y=m*y,b.z=M*q,u.push(b.x,b.y,b.z),f.push(0,y,0),R.x=q*.5+.5,R.y=H*.5*y+.5,d.push(R.x,R.y),g++}for(let z=0;z<i;z++){const N=P+z,W=L+z;v===!0?h.push(W,W+1,N):h.push(W+1,W,N),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class To extends zr{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new To(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fi extends yh{constructor(t){super(t),this.uuid=Or(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new yh().fromJSON(i))}return this}}const nv={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Ou(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=av(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],f=r[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return ss(s,o,e,a,l,d,0),o}};function Ou(r,t,e,n,i){let s,o;if(i===vv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Mh(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Mh(s,r[s],r[s+1],o);return o&&bo(o,o.next)&&(as(o),o=o.next),o}function qi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(bo(e,e.next)||de(e.prev,e,e.next)===0)){if(as(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ss(r,t,e,n,i,s,o){if(!r)return;!o&&s&&fv(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?rv(r,n,i,s):iv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),as(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=sv(qi(r),t,e),ss(r,t,e,n,i,s,2)):o===2&&ov(r,t,e,n,i,s):ss(qi(r),t,e,n,i,s,1);break}}}function iv(r){const t=r.prev,e=r,n=r.next;if(de(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&pr(i,a,s,l,o,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rv(r,t,e,n){const i=r.prev,s=r,o=r.next;if(de(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=fl(d,g,t,e,n),S=fl(_,m,t,e,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=p&&v&&v.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&pr(a,h,l,u,c,f,x.x,x.y)&&de(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&pr(a,h,l,u,c,f,v.x,v.y)&&de(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&pr(a,h,l,u,c,f,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&pr(a,h,l,u,c,f,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function sv(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!bo(i,s)&&Fu(i,n,n.next,s)&&os(i,s)&&os(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),as(n),as(n.next),n=r=s),n=n.next}while(n!==r);return qi(n)}function ov(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mv(o,a)){let l=Bu(o,a);o=qi(o,o.next),l=qi(l,l.next),ss(o,t,e,n,i,s,0),ss(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function av(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Ou(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(pv(c));for(i.sort(lv),s=0;s<i.length;s++)e=cv(i[s],e);return e}function lv(r,t){return r.x-t.x}function cv(r,t){const e=hv(r,t);if(!e)return t;const n=Bu(e,r);return qi(n,n.next),qi(e,e.next)}function hv(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&pr(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),os(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&uv(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function uv(r,t){return de(r.prev,r,t.prev)<0&&de(t.next,r,r.next)<0}function fv(r,t,e,n){let i=r;do i.z===0&&(i.z=fl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,dv(i)}function dv(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function fl(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function pv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function pr(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function mv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!_v(r,t)&&(os(r,t)&&os(t,r)&&gv(r,t)&&(de(r.prev,r,t.prev)||de(r,t.prev,t))||bo(r,t)&&de(r.prev,r,r.next)>0&&de(t.prev,t,t.next)>0)}function de(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function bo(r,t){return r.x===t.x&&r.y===t.y}function Fu(r,t,e,n){const i=Ys(de(r,t,e)),s=Ys(de(r,t,n)),o=Ys(de(e,n,r)),a=Ys(de(e,n,t));return!!(i!==s&&o!==a||i===0&&qs(r,e,t)||s===0&&qs(r,n,t)||o===0&&qs(e,r,n)||a===0&&qs(e,t,n))}function qs(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ys(r){return r>0?1:r<0?-1:0}function _v(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Fu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function os(r,t){return de(r.prev,r,r.next)<0?de(r,t,r.next)>=0&&de(r,r.prev,t)>=0:de(r,t,r.prev)<0||de(r,r.next,t)<0}function gv(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Bu(r,t){const e=new dl(r.i,r.x,r.y),n=new dl(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Mh(r,t,e,n){const i=new dl(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function as(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function dl(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class di{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return di.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Sh(t),Eh(n,t);let o=t.length;e.forEach(Sh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Eh(n,e[l]);const a=nv.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Sh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Eh(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Gl extends Oe{constructor(t=new fi([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new re(i,3)),this.setAttribute("uv",new re(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:xv;let x,v=!1,P,R,b,A;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,P=p.computeFrenetFrames(h,!1),R=new I,b=new I,A=new I),f||(m=0,d=0,g=0,_=0);const M=a.extractPoints(c);let y=M.shape;const L=M.holes;if(!di.isClockWise(y)){y=y.reverse();for(let X=0,et=L.length;X<et;X++){const C=L[X];di.isClockWise(C)&&(L[X]=C.reverse())}}const N=di.triangulateShape(y,L),W=y;for(let X=0,et=L.length;X<et;X++){const C=L[X];y=y.concat(C)}function q(X,et,C){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(et,C)}const H=y.length,K=N.length;function V(X,et,C){let gt,st,mt;const ut=X.x-et.x,It=X.y-et.y,_t=C.x-X.x,w=C.y-X.y,E=ut*ut+It*It,G=ut*w-It*_t;if(Math.abs(G)>Number.EPSILON){const Q=Math.sqrt(E),ot=Math.sqrt(_t*_t+w*w),tt=et.x-It/Q,Rt=et.y+ut/Q,vt=C.x-w/ot,bt=C.y+_t/ot,Vt=((vt-tt)*w-(bt-Rt)*_t)/(ut*w-It*_t);gt=tt+ut*Vt-X.x,st=Rt+It*Vt-X.y;const ct=gt*gt+st*st;if(ct<=2)return new ht(gt,st);mt=Math.sqrt(ct/2)}else{let Q=!1;ut>Number.EPSILON?_t>Number.EPSILON&&(Q=!0):ut<-Number.EPSILON?_t<-Number.EPSILON&&(Q=!0):Math.sign(It)===Math.sign(w)&&(Q=!0),Q?(gt=-It,st=ut,mt=Math.sqrt(E)):(gt=ut,st=It,mt=Math.sqrt(E/2))}return new ht(gt/mt,st/mt)}const ft=[];for(let X=0,et=W.length,C=et-1,gt=X+1;X<et;X++,C++,gt++)C===et&&(C=0),gt===et&&(gt=0),ft[X]=V(W[X],W[C],W[gt]);const U=[];let D,it=ft.concat();for(let X=0,et=L.length;X<et;X++){const C=L[X];D=[];for(let gt=0,st=C.length,mt=st-1,ut=gt+1;gt<st;gt++,mt++,ut++)mt===st&&(mt=0),ut===st&&(ut=0),D[gt]=V(C[gt],C[mt],C[ut]);U.push(D),it=it.concat(D)}for(let X=0;X<m;X++){const et=X/m,C=d*Math.cos(et*Math.PI/2),gt=g*Math.sin(et*Math.PI/2)+_;for(let st=0,mt=W.length;st<mt;st++){const ut=q(W[st],ft[st],gt);J(ut.x,ut.y,-C)}for(let st=0,mt=L.length;st<mt;st++){const ut=L[st];D=U[st];for(let It=0,_t=ut.length;It<_t;It++){const w=q(ut[It],D[It],gt);J(w.x,w.y,-C)}}}const pt=g+_;for(let X=0;X<H;X++){const et=f?q(y[X],it[X],pt):y[X];v?(b.copy(P.normals[0]).multiplyScalar(et.x),R.copy(P.binormals[0]).multiplyScalar(et.y),A.copy(x[0]).add(b).add(R),J(A.x,A.y,A.z)):J(et.x,et.y,0)}for(let X=1;X<=h;X++)for(let et=0;et<H;et++){const C=f?q(y[et],it[et],pt):y[et];v?(b.copy(P.normals[X]).multiplyScalar(C.x),R.copy(P.binormals[X]).multiplyScalar(C.y),A.copy(x[X]).add(b).add(R),J(A.x,A.y,A.z)):J(C.x,C.y,u/h*X)}for(let X=m-1;X>=0;X--){const et=X/m,C=d*Math.cos(et*Math.PI/2),gt=g*Math.sin(et*Math.PI/2)+_;for(let st=0,mt=W.length;st<mt;st++){const ut=q(W[st],ft[st],gt);J(ut.x,ut.y,u+C)}for(let st=0,mt=L.length;st<mt;st++){const ut=L[st];D=U[st];for(let It=0,_t=ut.length;It<_t;It++){const w=q(ut[It],D[It],gt);v?J(w.x,w.y+x[h-1].y,x[h-1].x+C):J(w.x,w.y,u+C)}}}k(),j();function k(){const X=i.length/3;if(f){let et=0,C=H*et;for(let gt=0;gt<K;gt++){const st=N[gt];lt(st[2]+C,st[1]+C,st[0]+C)}et=h+m*2,C=H*et;for(let gt=0;gt<K;gt++){const st=N[gt];lt(st[0]+C,st[1]+C,st[2]+C)}}else{for(let et=0;et<K;et++){const C=N[et];lt(C[2],C[1],C[0])}for(let et=0;et<K;et++){const C=N[et];lt(C[0]+H*h,C[1]+H*h,C[2]+H*h)}}n.addGroup(X,i.length/3-X,0)}function j(){const X=i.length/3;let et=0;at(W,et),et+=W.length;for(let C=0,gt=L.length;C<gt;C++){const st=L[C];at(st,et),et+=st.length}n.addGroup(X,i.length/3-X,1)}function at(X,et){let C=X.length;for(;--C>=0;){const gt=C;let st=C-1;st<0&&(st=X.length-1);for(let mt=0,ut=h+m*2;mt<ut;mt++){const It=H*mt,_t=H*(mt+1),w=et+gt+It,E=et+st+It,G=et+st+_t,Q=et+gt+_t;yt(w,E,G,Q)}}}function J(X,et,C){l.push(X),l.push(et),l.push(C)}function lt(X,et,C){nt(X),nt(et),nt(C);const gt=i.length/3,st=S.generateTopUV(n,i,gt-3,gt-2,gt-1);Tt(st[0]),Tt(st[1]),Tt(st[2])}function yt(X,et,C,gt){nt(X),nt(et),nt(gt),nt(et),nt(C),nt(gt);const st=i.length/3,mt=S.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);Tt(mt[0]),Tt(mt[1]),Tt(mt[3]),Tt(mt[1]),Tt(mt[2]),Tt(mt[3])}function nt(X){i.push(l[X*3+0]),i.push(l[X*3+1]),i.push(l[X*3+2])}function Tt(X){s.push(X.x),s.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yv(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new co[i.type]().fromJSON(i)),new Gl(n,t.options)}}const xv={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ht(s,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(f,1-g),new ht(_,1-p)]:[new ht(a,1-l),new ht(h,1-u),new ht(d,1-g),new ht(m,1-p)]}};function yv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Vl extends Oe{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,d=new I,g=new ht;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const S=p+m,x=S,v=S+n+1,P=S+n+2,R=S+1;a.push(x,v,R),a.push(v,P,R)}}this.setIndex(a),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yi extends Oe{constructor(t=new fi([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new re(i,3)),this.setAttribute("normal",new re(s,3)),this.setAttribute("uv",new re(o,2));function c(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;di.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];di.isClockWise(S)===!0&&(g[m]=S.reverse())}const _=di.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];i.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){const S=_[m],x=S[0]+u,v=S[1]+u,P=S[2]+u;n.push(x,v,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Mv(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Yi(n,t.curveSegments)}}function Mv(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Ln extends Oe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const R=P/e;u.x=-t*Math.cos(i+R*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+R*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(R+v,1-x),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const x=h[p][S+1],v=h[p][S],P=h[p+1][S],R=h[p+1][S+1];(p!==0||o>0)&&d.push(x,v,R),(p!==n-1||l<Math.PI)&&d.push(v,P,R)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wl extends Oe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,S=(i+1)*d+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wo extends Oe{constructor(t=new Uu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new ht;let h=new I;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function _(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),S(),p()}function m(x){h=t.getPointAt(x/e,h);const v=o.normals[x],P=o.binormals[x];for(let R=0;R<=i;R++){const b=R/i*Math.PI*2,A=Math.sin(b),M=-Math.cos(b);l.x=M*v.x+A*P.x,l.y=M*v.y+A*P.y,l.z=M*v.z+A*P.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=i;v++){const P=(i+1)*(x-1)+(v-1),R=(i+1)*x+(v-1),b=(i+1)*x+v,A=(i+1)*(x-1)+v;g.push(P,R,A),g.push(R,b,A)}}function S(){for(let x=0;x<=e;x++)for(let v=0;v<=i;v++)c.x=x/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wo(new co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ie extends Fr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ao extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Sv extends Ao{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ha=new ae,Th=new I,bh=new I;class zu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wh=new ae,Yr=new I,ua=new I;class Ev extends zu{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Yr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Yr),ua.copy(n.position),ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ua),n.updateMatrixWorld(),i.makeTranslation(-Yr.x,-Yr.y,-Yr.z),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}}class ls extends Ao{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ev}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Tv extends zu{constructor(){super(new bu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ah extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Tv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bv extends Ao{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ch=new ae;class wv{constructor(t,e,n=0,i=1/0){this.ray=new Mo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ch.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ch),this}intersectObject(t,e=!0,n=[]){return pl(t,this,n,e),n.sort(Rh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)pl(t[i],this,n,e);return n.sort(Rh),n}}function Rh(r,t){return r.distance-t.distance}function pl(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)pl(s[o],t,e,!0)}}class Ph{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Av extends Zi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);function Gn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ku(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cs={duration:.5,overwrite:!1,delay:0},Xl,Ce,he,dn=1e8,ie=1/dn,ml=Math.PI*2,Cv=ml/4,Rv=0,Hu=Math.sqrt,Pv=Math.cos,Lv=Math.sin,we=function(t){return typeof t=="string"},_e=function(t){return typeof t=="function"},jn=function(t){return typeof t=="number"},ql=function(t){return typeof t>"u"},Dn=function(t){return typeof t=="object"},qe=function(t){return t!==!1},Yl=function(){return typeof window<"u"},Zs=function(t){return _e(t)||we(t)},Gu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ne=Array.isArray,Dv=/random\([^)]+\)/g,Iv=/,\s*/g,Lh=/(?:-?\.?\d|\.)+/gi,Vu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,mr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wu=/[+-]=-?[.\d]+/,Uv=/[^,'"\[\]\s]+/gi,Nv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,fe,bn,_l,Zl,an={},ho={},Xu,qu=function(t){return(ho=Pr(t,an))&&Ke},jl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},hs=function(t,e){return!e&&console.warn(t)},Yu=function(t,e){return t&&(an[t]=e)&&ho&&(ho[t]=e)||an},us=function(){return 0},Ov={suppressEvents:!0,isStart:!0,kill:!1},io={suppressEvents:!0,kill:!1},Fv={suppressEvents:!0},Kl={},pi=[],gl={},Zu,tn={},da={},Dh=30,ro=[],Jl="",$l=function(t){var e=t[0],n,i;if(Dn(e)||_e(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ro.length;i--&&!ro[i].targetTest(e););n=ro[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new gf(t[i],n)))||t.splice(i,1);return t},Bi=function(t){return t._gsap||$l(pn(t))[0]._gsap},ju=function(t,e,n){return(n=t[e])&&_e(n)?t[e]():ql(n)&&t.getAttribute&&t.getAttribute(e)||n},Ye=function(t,e){return(t=t.split(",")).forEach(e)||t},ge=function(t){return Math.round(t*1e5)/1e5||0},ue=function(t){return Math.round(t*1e7)/1e7||0},Mr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Bv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},uo=function(){var t=pi.length,e=pi.slice(0),n,i;for(gl={},pi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ql=function(t){return!!(t._initted||t._startAt||t.add)},Ku=function(t,e,n,i){pi.length&&!Ce&&uo(),t.render(e,n,!!(Ce&&e<0&&Ql(t))),pi.length&&!Ce&&uo()},Ju=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Uv).length<2?e:we(t)?t.trim():t},$u=function(t){return t},ln=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},zv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Pr=function(t,e){for(var n in e)t[n]=e[n];return t},Ih=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Dn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},fo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},es=function(t){var e=t.parent||fe,n=t.keyframes?zv(Ne(t.keyframes)):ln;if(qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},kv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Qu=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Co=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},vi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Hv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},vl=function(t,e,n,i){return t._startAt&&(Ce?t._startAt.revert(io):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Gv=function r(t){return!t||t._ts&&r(t.parent)},Uh=function(t){return t._repeat?Lr(t._tTime,t=t.duration()+t._rDelay)*t:0},Lr=function(t,e){var n=Math.floor(t=ue(t/e));return t&&n===t?n-1:n},po=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ro=function(t){return t._end=ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||ie)||0))},Po=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ro(t),n._dirty||zi(n,t)),t},tf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=po(t.rawTime(),e),(!e._dur||xs(0,e.totalDuration(),n)-e._tTime>ie)&&e.render(n,!0)),zi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ie}},An=function(t,e,n,i){return e.parent&&vi(e),e._start=ue((jn(n)?n:n||t!==fe?un(t,n,e):t._time)+e._delay),e._end=ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Qu(t,e,"_first","_last",t._sort?"_start":0),xl(e)||(t._recent=e),i||tf(t,e),t._ts<0&&Po(t,t._tTime),t},ef=function(t,e){return(an.ScrollTrigger||jl("scrollTrigger",e))&&an.ScrollTrigger.create(e,t)},nf=function(t,e,n,i,s){if(ec(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ce&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zu!==nn.frame)return pi.push(t),t._lazy=[s,i],1},Vv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},xl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Wv=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Vv(t)&&!(!t._initted&&xl(t))||(t._ts<0||t._dp._ts<0)&&!xl(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=xs(0,t._tDur,e),h=Lr(l,a),t._yoyo&&h&1&&(o=1-o),h!==Lr(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ce||i||t._zTime===ie||!e&&t._zTime){if(!t._initted&&nf(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ie:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&vl(t,e,n,!0),t._onUpdate&&!n&&rn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&rn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&vi(t,1),!n&&!Ce&&(rn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Xv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Dr=function(t,e,n,i){var s=t._repeat,o=ue(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ue(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Po(t,t._tTime=t._tDur*a),t.parent&&Ro(t),n||zi(t.parent,t),t},Nh=function(t){return t instanceof Ve?zi(t):Dr(t,t._dur)},qv={_start:0,endTime:us,totalDuration:us},un=function r(t,e,n){var i=t.labels,s=t._recent||qv,o=t.duration()>=dn?s.endTime(!1):t._dur,a,l,c;return we(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ne(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ns=function(t,e,n){var i=jn(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qe(l.vars.inherit)&&l.parent;o.immediateRender=qe(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new xe(e[0],o,e[s+1])},Mi=function(t,e){return t||t===0?e(t):e},xs=function(t,e,n){return n<t?t:n>e?e:n},Ue=function(t,e){return!we(t)||!(e=Nv.exec(t))?"":e[1]},Yv=function(t,e,n){return Mi(n,function(i){return xs(t,e,i)})},yl=[].slice,rf=function(t,e){return t&&Dn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Dn(t[0]))&&!t.nodeType&&t!==bn},Zv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return we(i)&&!e||rf(i,1)?(s=n).push.apply(s,pn(i)):n.push(i)})||n},pn=function(t,e,n){return he&&!e&&he.selector?he.selector(t):we(t)&&!n&&(_l||!Ir())?yl.call((e||Zl).querySelectorAll(t),0):Ne(t)?Zv(t,n):rf(t)?yl.call(t,0):t?[t]:[]},Ml=function(t){return t=pn(t)[0]||hs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return pn(e,n.querySelectorAll?n:n===t?hs("Invalid scope")||Zl.createElement("div"):t)}},sf=function(t){return t.sort(function(){return .5-Math.random()})},of=function(t){if(_e(t))return t;var e=Dn(t)?t:{each:t},n=ki(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return we(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||e).length,m=o[_],p,S,x,v,P,R,b,A,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,dn])[1],!M){for(b=-dn;b<(b=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*h-.5:i%M,S=M===dn?0:l?_*u/M-.5:i/M|0,b=0,A=dn,R=0;R<_;R++)x=R%M-p,v=S-(R/M|0),m[R]=P=c?Math.abs(c==="y"?v:x):Hu(x*x+v*v),P>b&&(b=P),P<A&&(A=P);i==="random"&&sf(m),m.max=b-A,m.min=A,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ue(e.amount||e.each)||0,n=n&&_<0?ax(n):n}return _=(m[f]-m.min)/m.max||0,ue(m.b+(n?n(_):_)*m.v)+m.u}},Sl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(jn(n)?0:Ue(n))}},af=function(t,e){var n=Ne(t),i,s;return!n&&Dn(t)&&(i=n=t.radius||dn,t.values?(t=pn(t.values),(s=!jn(t[0]))&&(i*=i)):t=Sl(t.increment)),Mi(e,n?_e(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=dn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||jn(o)?h:h+Ue(o)}:Sl(t))},lf=function(t,e,n,i){return Mi(Ne(t)?!e:n===!0?!!(n=0):!i,function(){return Ne(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},jv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Kv=function(t,e){return function(n){return t(parseFloat(n))+(e||Ue(n))}},Jv=function(t,e,n){return hf(t,e,0,1,n)},cf=function(t,e,n){return Mi(n,function(i){return t[~~e(i)]})},$v=function r(t,e,n){var i=e-t;return Ne(t)?cf(t,r(0,t.length),e):Mi(n,function(s){return(i+(s-t)%i)%i+t})},Qv=function r(t,e,n){var i=e-t,s=i*2;return Ne(t)?cf(t,r(0,t.length-1),e):Mi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},fs=function(t){return t.replace(Dv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Iv);return lf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},hf=function(t,e,n,i,s){var o=e-t,a=i-n;return Mi(s,function(l){return n+((l-t)/o*a||0)})},tx=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=we(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ne(t)&&!Ne(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=Pr(Ne(t)?[]:{},t));if(!h){for(l in e)tc.call(a,t,l,"get",e[l]);s=function(g){return rc(g,a)||(o?t.p:t)}}}return Mi(n,s)},Oh=function(t,e,n){var i=t.labels,s=dn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},rn=function(t,e,n){var i=t.vars,s=i[e],o=he,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&pi.length&&uo(),a&&(he=a),h=l?s.apply(c,l):s.call(c),he=o,h},Jr=function(t){return vi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ce),t.progress()<1&&rn(t,"onInterrupt"),t},_r,uf=[],ff=function(t){if(t)if(t=!t.name&&t.default||t,Yl()||t.headless){var e=t.name,n=_e(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:us,render:rc,add:tc,kill:gx,modifier:_x,rawVars:0},o={targetTest:0,get:0,getSetter:ic,aliases:{},register:0};if(Ir(),t!==i){if(tn[e])return;ln(i,ln(fo(t,s),o)),Pr(i.prototype,Pr(s,fo(t,o))),tn[i.prop=e]=i,t.targetTest&&(ro.push(i),Kl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Yu(e,i),t.register&&t.register(Ke,i,Ze)}else uf.push(t)},ne=255,$r={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},pa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ne+.5|0},df=function(t,e,n){var i=t?jn(t)?[t>>16,t>>8&ne,t&ne]:0:$r.black,s,o,a,l,c,h,u,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$r[t])i=$r[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ne,i&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Lh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=pa(l+1/3,s,o),i[1]=pa(l,s,o),i[2]=pa(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Vu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Lh)||$r.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ne,o=i[1]/ne,a=i[2]/ne,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},pf=function(t){var e=[],n=[],i=-1;return t.split(mi).forEach(function(s){var o=s.match(mr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Fh=function(t,e,n){var i="",s=(t+i).match(mi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=df(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=pf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(mi,"1").split(mr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(mi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},mi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $r)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),ex=/hsl[a]?\(/,mf=function(t){var e=t.join(" "),n;if(mi.lastIndex=0,mi.test(e))return n=ex.test(e),t[1]=Fh(t[1],n),t[0]=Fh(t[0],n,pf(t[1])),!0},ds,nn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,g=function _(m){var p=r()-i,S=m===!0,x,v,P,R;if((p>t||p<0)&&(n+=p-e),i+=p,P=i-n,x=P-o,(x>0||S)&&(R=++u.frame,f=P-u.time*1e3,u.time=P=P/1e3,o+=x+(x>=s?4:s-x),v=1),S||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](P,f,R,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Xu&&(!_l&&Yl()&&(bn=_l=window,Zl=bn.document||{},an.gsap=Ke,(bn.gsapVersions||(bn.gsapVersions=[])).push(Ke.version),qu(ho||bn.GreenSockGlobals||!bn.gsap&&bn||{}),uf.forEach(ff)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},ds=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ds=0,c=us},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,S){var x=p?function(v,P,R,b){m(v,P,R,b),u.remove(x)}:m;return u.remove(m),a[S?"unshift":"push"](x),Ir(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u}(),Ir=function(){return!ds&&nn.wake()},qt={},nx=/^[\d.\-M][\d.\-,\s]/,ix=/["']/g,rx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(ix,"").trim():+c,i=l.substr(a+1).trim();return e},sx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ox=function(t){var e=(t+"").split("("),n=qt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[rx(e[1])]:sx(t).split(",").map(Ju)):qt._CE&&nx.test(t)?qt._CE("",t):n},ax=function(t){return function(e){return 1-t(1-e)}},ki=function(t,e){return t&&(_e(t)?t:qt[t]||ox(t))||e},ji=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Ye(t,function(a){qt[a]=an[a]=s,qt[o=a.toLowerCase()]=n;for(var l in s)qt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qt[a+"."+l]=s[l]}),s},_f=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ma=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/ml*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Lv((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:_f(a);return s=ml/s,l.config=function(c,h){return r(t,c,h)},l},_a=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:_f(n);return i.config=function(s){return r(t,s)},i};Ye("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ji(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});qt.Linear.easeNone=qt.none=qt.Linear.easeIn;ji("Elastic",ma("in"),ma("out"),ma());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ji("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ji("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ji("Circ",function(r){return-(Hu(1-r*r)-1)});ji("Sine",function(r){return r===1?1:-Pv(r*Cv)+1});ji("Back",_a("in"),_a("out"),_a());qt.SteppedEase=qt.steps=an.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ie;return function(a){return((i*xs(0,o,a)|0)+s)*n}}};cs.ease=qt["quad.out"];Ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Jl+=r+","+r+"Params,"});var gf=function(t,e){this.id=Rv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ju,this.set=e?e.getSetter:ic},ps=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Dr(this,+e.duration,1,1),this.data=e.data,he&&(this._ctx=he,he.data.push(this)),ds||nn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Dr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ir(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Po(this,n),!s._dp||s.parent||tf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&An(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ie||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ku(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Uh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Lr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ie?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?po(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ie?0:this._rts,this.totalTime(xs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ro(this),Hv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ir(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ie&&(this._tTime-=ie)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&An(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?po(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Fv);var i=Ce;return Ce=n,Ql(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ce=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(un(this,n),qe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qe(i)),this._dur||(this._zTime=-ie),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ie,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ie)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=_e(n)?n:$u,l=function(){var h=i.then;i.then=null,s&&s(),_e(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Jr(this)},r}();ln(ps.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ie,_prom:0,_ps:!1,_rts:1});var Ve=function(r){ku(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qe(n.sortChildren),fe&&An(n.parent||fe,Gn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ef(Gn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ns(0,arguments,this),this},e.from=function(i,s,o){return ns(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ns(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,es(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xe(i,s,un(this,o),1),this},e.call=function(i,s,o){return An(this,xe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new xe(i,o,un(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,es(o).immediateRender=qe(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,es(a).immediateRender=qe(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ue(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,S,x,v,P,R,b;if(this!==fe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,x=this._ts,p=!x,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=ue(h%m),h===l?(_=this._repeat,f=c):(P=ue(h/m),_=~~P,_&&_===P&&(f=c,_--),f>c&&(f=c)),P=Lr(this._tTime,m),!a&&this._tTime&&P!==_&&this._tTime-P*m-this._dur<=0&&(P=_),R&&_&1&&(f=c-f,b=1),_!==P&&!this._lock){var A=R&&P&1,M=A===(R&&_&1);if(_<P&&(A=!A),a=A?0:h%c?c:h,this._lock=1,this.render(a||(b?0:ue(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,P=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Xv(this,ue(a),ue(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!P&&(rn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=-ie);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||Ce&&Ql(d)),f!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=y?-ie:ie);break}}d=g}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-ie)._zTime=f>=a?1:-1,this._ts))return this._start=v,Ro(this),this.render(i,s,o);this._onUpdate&&!s&&rn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&vi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(rn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(jn(s)||(s=un(this,s,i)),!(i instanceof ps)){if(Ne(i))return i.forEach(function(a){return o.add(a,s)}),this;if(we(i))return this.addLabel(i,s);if(_e(i))i=xe.delayedCall(0,i);else return this}return this!==i?An(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-dn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof xe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return we(i)?this.removeLabel(i):_e(i)?this.killTweensOf(i):(i.parent===this&&Co(this,i),i===this._recent&&(this._recent=this._last),zi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue(nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=un(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=xe.delayedCall(0,s||us,o);return a.data="isPause",this._hasPause=1,An(this,a,un(this,i))},e.removePause=function(i){var s=this._first;for(i=un(this,i);s;)s._start===i&&s.data==="isPause"&&vi(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ai!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=pn(i),l=this._first,c=jn(s),h;l;)l instanceof xe?Bv(l._targets,a)&&(c?(!ai||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=un(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=xe.to(o,ln({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ie,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Dr(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ln({startAt:{time:un(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Oh(this,un(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Oh(this,un(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ie)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=ue(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return zi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zi(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=dn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,An(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=ue(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Dr(o,o===fe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(fe._ts&&(Ku(fe,po(i,fe)),Zu=nn.frame),nn.frame>=Dh){Dh+=on.autoSleep||120;var s=fe._first;if((!s||!s._ts)&&on.autoSleep&&nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||nn.sleep()}}},t}(ps);ln(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var lx=function(t,e,n,i,s,o,a){var l=new Ze(this._pt,t,e,0,1,Ef,null,s),c=0,h=0,u,f,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=fs(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),f=n.match(fa)||[];u=fa.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Mr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=fa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Wu.test(i)||p)&&(l.e=0),this._pt=l,l},tc=function(t,e,n,i,s,o,a,l,c,h){_e(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:_e(u)?c?t[e.indexOf("set")||!_e(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=_e(u)?c?dx:Mf:nc,g;if(we(i)&&(~i.indexOf("random(")&&(i=fs(i)),i.charAt(1)==="="&&(g=Mr(f,i)+(Ue(f)||0),(g||g===0)&&(i=g))),!h||f!==i||El)return!isNaN(f*i)&&i!==""?(g=new Ze(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?mx:Sf,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&jl(e,i),lx.call(this,t,e,f,i,d,l||on.stringFilter,c))},cx=function(t,e,n,i,s){if(_e(t)&&(t=is(t,s,e,n,i)),!Dn(t)||t.style&&t.nodeType||Ne(t)||Gu(t))return we(t)?is(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=is(t[a],s,e,n,i);return o},vf=function(t,e,n,i,s,o){var a,l,c,h;if(tn[t]&&(a=new tn[t]).init(s,a.rawVars?e[t]:cx(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Ze(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==_r))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ai,El,ec=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!Xl,v=t.timeline,P=i.easeReverse||u,R,b,A,M,y,L,z,N,W,q,H,K,V;if(v&&(!f||!s)&&(s="none"),t._ease=ki(s,cs.ease),t._rEase=P&&(ki(P)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||f&&!i.stagger){if(N=m[0]?Bi(m[0]).harness:0,K=N&&i[N.prop],R=fo(i,Kl),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?io:Ov),_._lazy=0),o){if(vi(t._startAt=xe.set(m,ln({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&qe(l),startAt:null,delay:0,onUpdate:c&&function(){return rn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce||!a&&!d)&&t._startAt.revert(io),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),A=ln({overwrite:!1,data:"isFromStart",lazy:a&&!_&&qe(l),immediateRender:a,stagger:0,parent:p},R),K&&(A[N.prop]=K),vi(t._startAt=xe.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce?t._startAt.revert(io):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ie,ie);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&qe(l)||l&&!g,b=0;b<m.length;b++){if(y=m[b],z=y._gsap||$l(m)[b]._gsap,t._ptLookup[b]=q={},gl[z.id]&&pi.length&&uo(),H=S===m?b:S.indexOf(y),N&&(W=new N).init(y,K||R,t,H,S)!==!1&&(t._pt=M=new Ze(t._pt,y,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ft){q[ft]=M}),W.priority&&(L=1)),!N||K)for(A in R)tn[A]&&(W=vf(A,R,t,H,y,S))?W.priority&&(L=1):q[A]=M=tc.call(t,y,A,"get",R[A],H,S,0,i.stringFilter);t._op&&t._op[b]&&t.kill(y,t._op[b]),x&&t._pt&&(ai=t,fe.killTweensOf(y,q,t.globalTime(e)),V=!t.parent,ai=0),t._pt&&l&&(gl[z.id]=1)}L&&Tf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,f&&e<=0&&v.render(dn,!0,!0)},hx=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return El=1,t.vars[e]="+=0",ec(t,a),El=0,l?hs(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=ge(n)+Ue(u.e)),u.b&&(u.b=h.s+Ue(u.b))},ux=function(t,e){var n=t[0]?Bi(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Pr({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},fx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Ne(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},is=function(t,e,n,i,s){return _e(t)?t.call(e,n,i,s):we(t)&&~t.indexOf("random(")?fs(t):t},xf=Jl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",yf={};Ye(xf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return yf[r]=1});var xe=function(r){ku(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:es(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||fe,S=(Ne(n)||Gu(n)?jn(n[0]):"length"in i)?[n]:pn(n),x,v,P,R,b,A,M,y;if(a._targets=S.length?$l(S):hs("GSAP target "+n+" not found. https://gsap.com",!on.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Zs(c)||Zs(h)){i=a.vars;var L=i.easeReverse||i.yoyoEase;if(x=a.timeline=new Ve({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),x.kill(),x.parent=x._dp=Gn(a),x._start=0,f||Zs(c)||Zs(h)){if(R=S.length,M=f&&of(f),Dn(f))for(b in f)~xf.indexOf(b)&&(y||(y={}),y[b]=f[b]);for(v=0;v<R;v++)P=fo(i,yf),P.stagger=0,L&&(P.easeReverse=L),y&&Pr(P,y),A=S[v],P.duration=+is(c,Gn(a),v,A,S),P.delay=(+is(h,Gn(a),v,A,S)||0)-a._delay,!f&&R===1&&P.delay&&(a._delay=h=P.delay,a._start+=h,P.delay=0),x.to(A,P,M?M(v,A,S):0),x._ease=qt.none;x.duration()?c=h=0:a.timeline=0}else if(g){es(ln(x.vars.defaults,{ease:"none"})),x._ease=ki(g.ease||i.ease||"none");var z=0,N,W,q;if(Ne(g))g.forEach(function(H){return x.to(S,H,">")}),x.duration();else{P={};for(b in g)b==="ease"||b==="easeEach"||fx(b,g[b],P,g.easeEach);for(b in P)for(N=P[b].sort(function(H,K){return H.t-K.t}),z=0,v=0;v<N.length;v++)W=N[v],q={ease:W.e,duration:(W.t-(v?N[v-1].t:0))/100*c},q[b]=W.v,x.to(S,q,z),z+=q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Xl&&(ai=Gn(a),fe.killTweensOf(S),ai=0),An(p,Gn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===ue(p._time)&&qe(u)&&Gv(Gn(a))&&p.data!=="nested")&&(a._tTime=-ie,a.render(Math.max(0,-h)||0)),m&&ef(Gn(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ie&&!h?l:i<ie?0:i,f,d,g,_,m,p,S,x;if(!c)Wv(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(f=ue(u%_),u===l?(g=this._repeat,f=c):(m=ue(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),m=Lr(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(ue(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(nf(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var P=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=P?(v?-1:1)/P:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!m&&(rn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&vl(this,i,s,o),rn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&rn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&vl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&vi(this,1),!s&&!(h&&!a)&&(u||a||p)&&(rn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ds||nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ec(this,c),h=this._ease(c/this._dur),hx(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Po(this,0),this.parent||Qu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Jr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ce),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ai&&ai.vars.overwrite!==!0)._first||Jr(this),this.parent&&o!==this.timeline.totalDuration()&&Dr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?pn(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!s||s==="all")&&kv(a,l))return s==="all"&&(this._pt=0),Jr(this);for(u=this._op=this._op||[],s!=="all"&&(we(s)&&(_={},Ye(s,function(S){return _[S]=1}),s=_),s=ux(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(u[p]=s,g=f,d={}):(d=u[p]=u[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Co(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Jr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ns(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ns(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return fe.killTweensOf(i,s,o)},t}(ps);ln(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ye("staggerTo,staggerFrom,staggerFromTo",function(r){xe[r]=function(){var t=new Ve,e=yl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var nc=function(t,e,n){return t[e]=n},Mf=function(t,e,n){return t[e](n)},dx=function(t,e,n,i){return t[e](i.fp,n)},px=function(t,e,n){return t.setAttribute(e,n)},ic=function(t,e){return _e(t[e])?Mf:ql(t[e])&&t.setAttribute?px:nc},Sf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},mx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ef=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},rc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},_x=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},gx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Co(this,e,"_pt"):e.dep||(n=1),e=i;return!n},vx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Tf=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Ze=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Sf,this.d=l||this,this.set=c||nc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=vx,this.m=n,this.mt=s,this.tween=i},r}();Ye(Jl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Kl[r]=1});an.TweenMax=an.TweenLite=xe;an.TimelineLite=an.TimelineMax=Ve;fe=new Ve({sortChildren:!1,defaults:cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=mf;var Hi=[],so={},xx=[],Bh=0,yx=0,ga=function(t){return(so[t]||xx).map(function(e){return e()})},Tl=function(){var t=Date.now(),e=[];t-Bh>2&&(ga("matchMediaInit"),Hi.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=bn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),ga("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Bh=t,ga("matchMedia"))},bf=function(){function r(e,n){this.selector=n&&Ml(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yx++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){_e(n)&&(s=i,i=n,n=_e);var o=this,a=function(){var c=he,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ml(s)),he=o,u=i.apply(o,arguments),_e(u)&&o._r.push(u),he=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===_e?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=he;he=null,n(this),he=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ve?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof xe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Hi.length;o--;)Hi[o].id===this.id&&Hi.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),Mx=function(){function r(e){this.contexts=[],this.scope=e,he&&he.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Dn(n)||(n={matches:n});var o=new bf(0,s||this.scope),a=o.conditions={},l,c,h;he&&!o.selector&&(o.selector=he.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=bn.matchMedia(n[c]),l&&(Hi.indexOf(o)<0&&Hi.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Tl):l.addEventListener("change",Tl)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),mo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ff(i)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){we(t)&&(t=pn(t)[0]);var s=Bi(t||{}).get,o=n?$u:Ju;return n==="native"&&(n=""),t&&(e?o((tn[e]&&tn[e].get||s)(t,e,n,i)):function(a,l,c){return o((tn[a]&&tn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=pn(t),t.length>1){var i=t.map(function(h){return Ke.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=tn[e],a=Bi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;_r._pt=0,u.init(t,n?h+n:h,_r,0,[t]),u.render(1,u),_r._pt&&rc(1,_r)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Ke.to(t,ln((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ki(t.ease,cs.ease)),Ih(cs,t||{})},config:function(t){return Ih(on,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!tn[a]&&!an[a]&&hs(e+" effect requires "+a+" plugin.")}),da[e]=function(a,l,c){return n(pn(a),ln(l||{},s),c)},o&&(Ve.prototype[e]=function(a,l,c){return this.add(da[e](a,Dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){qt[t]=ki(e)},parseEase:function(t,e){return arguments.length?ki(t,e):qt},getById:function(t){return fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),i,s;for(n.smoothChildTiming=qe(t.smoothChildTiming),fe.remove(n),n._dp=0,n._time=n._tTime=fe._time,i=fe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof xe&&i.vars.onComplete===i._targets[0]))&&An(n,i,i._start-i._delay),i=s;return An(fe,n,0),n},context:function(t,e){return t?new bf(t,e):he},matchMedia:function(t){return new Mx(t)},matchMediaRefresh:function(){return Hi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Tl()},addEventListener:function(t,e){var n=so[t]||(so[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=so[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:$v,wrapYoyo:Qv,distribute:of,random:lf,snap:af,normalize:Jv,getUnit:Ue,clamp:Yv,splitColor:df,toArray:pn,selector:Ml,mapRange:hf,pipe:jv,unitize:Kv,interpolate:tx,shuffle:sf},install:qu,effects:da,ticker:nn,updateRoot:Ve.updateRoot,plugins:tn,globalTimeline:fe,core:{PropTween:Ze,globals:Yu,Tween:xe,Timeline:Ve,Animation:ps,getCache:Bi,_removeLinkedListItem:Co,reverting:function(){return Ce},context:function(t){return t&&he&&(he.data.push(t),t._ctx=he),he},suppressOverwrites:function(t){return Xl=t}}};Ye("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return mo[r]=xe[r]});nn.add(Ve.updateRoot);_r=mo.to({},{duration:0});var Sx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Ex=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Sx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},va=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(we(s)&&(l={},Ye(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Ex(a,s)}}}},Ke=mo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ce?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},va("roundProps",Sl),va("modifiers"),va("snap",af))||mo;xe.version=Ve.version=Ke.version="3.15.0";Xu=1;Yl()&&Ir();qt.Power0;qt.Power1;qt.Power2;qt.Power3;qt.Power4;qt.Linear;qt.Quad;qt.Cubic;qt.Quart;qt.Quint;qt.Strong;qt.Elastic;qt.Back;qt.SteppedEase;qt.Bounce;qt.Sine;qt.Expo;qt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zh,li,Sr,sc,Fi,kh,oc,Tx=function(){return typeof window<"u"},Kn={},Di=180/Math.PI,Er=Math.PI/180,ur=Math.atan2,Hh=1e8,ac=/([A-Z])/g,bx=/(left|right|width|margin|padding|x)/i,wx=/[\s,\(]\S/,Rn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ax=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Rx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Px=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},wf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Af=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Lx=function(t,e,n){return t.style[e]=n},Dx=function(t,e,n){return t.style.setProperty(e,n)},Ix=function(t,e,n){return t._gsap[e]=n},Ux=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Nx=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ox=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},pe="transform",je=pe+"Origin",Fx=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Kn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Rn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Vn(i,a)}):this.tfm[t]=o.x?o[t]:Vn(i,t),t===je&&(this.tfm.zOrigin=o.zOrigin);else return Rn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(pe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(je,e,"")),t=pe}(s||e)&&this.props.push(t,e,s[t])},Cf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Bx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ac,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=oc(),(!s||!s.isStart)&&!n[pe]&&(Cf(n),i.zOrigin&&n[je]&&(n[je]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Rf=function(t,e){var n={target:t,props:[],revert:Bx,save:Fx};return t._gsap||Ke.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Pf,wl=function(t,e){var n=li.createElementNS?li.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):li.createElement(t);return n&&n.style?n:li.createElement(t)},sn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ac,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ur(e)||e,1)||""},Gh="O,Moz,ms,Ms,Webkit".split(","),Ur=function(t,e,n){var i=e||Fi,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Gh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Gh[o]:"")+t},Al=function(){Tx()&&window.document&&(zh=window,li=zh.document,Sr=li.documentElement,Fi=wl("div")||{style:{}},wl("div"),pe=Ur(pe),je=pe+"Origin",Fi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pf=!!Ur("perspective"),oc=Ke.core.reverting,sc=1)},Vh=function(t){var e=t.ownerSVGElement,n=wl("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Sr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Sr.removeChild(n),s},Wh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Lf=function(t){var e,n;try{e=t.getBBox()}catch{e=Vh(t),n=1}return e&&(e.width||e.height)||n||(e=Vh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Wh(t,["x","cx","x1"])||0,y:+Wh(t,["y","cy","y1"])||0,width:0,height:0}:e},Df=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Lf(t))},xi=function(t,e){if(e){var n=t.style,i;e in Kn&&e!==je&&(e=pe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ac,"-$1").toLowerCase())):n.removeAttribute(e)}},ci=function(t,e,n,i,s,o){var a=new Ze(t._pt,e,n,0,1,o?Af:wf);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Xh={deg:1,rad:1,turn:1},zx={grid:1,flex:1},yi=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Fi.style,l=bx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Xh[i]||Xh[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&Df(t),(d||o==="%")&&(Kn[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],ge(d?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===li||!_.appendChild)&&(_=li.body),m=_._gsap,m&&d&&m.width&&l&&m.time===nn.time&&!m.uncache)return ge(s/m.width*u);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,g=t[h],S?t.style[e]=S:xi(t,e)}else(d||o==="%")&&!zx[sn(_,"display")]&&(a.position=sn(t,"position")),_===t&&(a.position="static"),_.appendChild(Fi),g=Fi[h],_.removeChild(Fi),a.position="absolute";return l&&d&&(m=Bi(_),m.time=nn.time,m.width=_[h]),ge(f?g*s/u:g&&s?u/g*s:0)},Vn=function(t,e,n,i){var s;return sc||Al(),e in Rn&&e!=="transform"&&(e=Rn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Kn[e]&&e!=="transform"?(s=_s(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:go(sn(t,je))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=_o[e]&&_o[e](t,e,n)||sn(t,e)||ju(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yi(t,e,s,n)+n:s},kx=function(t,e,n,i){if(!n||n==="none"){var s=Ur(e,t,1),o=s&&sn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=sn(t,"borderTopColor"))}var a=new Ze(this._pt,t.style,e,0,1,Ef),l=0,c=0,h,u,f,d,g,_,m,p,S,x,v,P;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=sn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=sn(t,e)||i,_?t.style[e]=_:xi(t,e)),h=[n,i],mf(h),n=h[0],i=h[1],f=n.match(mr)||[],P=i.match(mr)||[],P.length){for(;u=mr.exec(i);)m=u[0],S=i.substring(l,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Mr(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=mr.lastIndex-x.length,x||(x=x||on.units[e]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(d=yi(t,e,_,x)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Af:wf;return Wu.test(i)&&(a.e=0),this._pt=a,a},qh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=qh[n]||n,e[1]=qh[i]||i,e.join(" ")},Gx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Kn[a]&&(l=1,a=a==="transformOrigin"?je:pe),xi(n,a);l&&(xi(n,pe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",_s(n,1),o.uncache=1,Cf(i)))}},_o={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Ze(t._pt,e,n,0,0,Gx);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ms=[1,0,0,1,0,0],If={},Uf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Yh=function(t){var e=sn(t,pe);return Uf(e)?ms:e.substr(7).match(Vu).map(ge)},lc=function(t,e){var n=t._gsap||Bi(t),i=t.style,s=Yh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ms:s):(s===ms&&!t.offsetParent&&t!==Sr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Sr.appendChild(t)),s=Yh(t),l?i.display=l:xi(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Sr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Cl=function(t,e,n,i,s,o){var a=t._gsap,l=s||lc(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],x=e.split(" "),v=parseFloat(x[0])||0,P=parseFloat(x[1])||0,R,b,A,M;n?l!==ms&&(b=d*m-g*_)&&(A=v*(m/b)+P*(-_/b)+(_*S-m*p)/b,M=v*(-g/b)+P*(d/b)-(d*S-g*p)/b,v=A,P=M):(R=Lf(t),v=R.x+(~x[0].indexOf("%")?v/100*R.width:v),P=R.y+(~(x[1]||x[0]).indexOf("%")?P/100*R.height:P)),i||i!==!1&&a.smooth?(p=v-c,S=P-h,a.xOffset=u+(p*d+S*_)-p,a.yOffset=f+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=P,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[je]="0px 0px",o&&(ci(o,a,"xOrigin",c,v),ci(o,a,"yOrigin",h,P),ci(o,a,"xOffset",u,a.xOffset),ci(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+P)},_s=function(t,e){var n=t._gsap||new gf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=sn(t,je)||"0",h,u,f,d,g,_,m,p,S,x,v,P,R,b,A,M,y,L,z,N,W,q,H,K,V,ft,U,D,it,pt,k,j;return h=u=f=_=m=p=S=x=v=0,d=g=1,n.svg=!!(t.getCTM&&Df(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pe]!=="none"?l[pe]:"")),i.scale=i.rotate=i.translate="none"),b=lc(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),Cl(t,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,b)),P=n.xOrigin||0,R=n.yOrigin||0,b!==ms&&(L=b[0],z=b[1],N=b[2],W=b[3],h=q=b[4],u=H=b[5],b.length===6?(d=Math.sqrt(L*L+z*z),g=Math.sqrt(W*W+N*N),_=L||z?ur(z,L)*Di:0,S=N||W?ur(N,W)*Di+_:0,S&&(g*=Math.abs(Math.cos(S*Er))),n.svg&&(h-=P-(P*L+R*N),u-=R-(P*z+R*W))):(j=b[6],pt=b[7],U=b[8],D=b[9],it=b[10],k=b[11],h=b[12],u=b[13],f=b[14],A=ur(j,it),m=A*Di,A&&(M=Math.cos(-A),y=Math.sin(-A),K=q*M+U*y,V=H*M+D*y,ft=j*M+it*y,U=q*-y+U*M,D=H*-y+D*M,it=j*-y+it*M,k=pt*-y+k*M,q=K,H=V,j=ft),A=ur(-N,it),p=A*Di,A&&(M=Math.cos(-A),y=Math.sin(-A),K=L*M-U*y,V=z*M-D*y,ft=N*M-it*y,k=W*y+k*M,L=K,z=V,N=ft),A=ur(z,L),_=A*Di,A&&(M=Math.cos(A),y=Math.sin(A),K=L*M+z*y,V=q*M+H*y,z=z*M-L*y,H=H*M-q*y,L=K,q=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=ge(Math.sqrt(L*L+z*z+N*N)),g=ge(Math.sqrt(H*H+j*j)),A=ur(q,H),S=Math.abs(A)>2e-4?A*Di:0,v=k?1/(k<0?-k:k):0),n.svg&&(K=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Uf(sn(t,pe)),K&&t.setAttribute("transform",K))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ge(d),n.scaleY=ge(g),n.rotation=ge(_)+a,n.rotationX=ge(m)+a,n.rotationY=ge(p)+a,n.skewX=S+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[je]=go(c)),n.xOffset=n.yOffset=0,n.force3D=on.force3D,n.renderTransform=n.svg?Wx:Pf?Nf:Vx,n.uncache=0,n},go=function(t){return(t=t.split(" "))[0]+" "+t[1]},xa=function(t,e,n){var i=Ue(e);return ge(parseFloat(e)+parseFloat(yi(t,"x",n+"px",i)))+i},Vx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Nf(t,e)},Ri="0deg",Zr="0px",Pi=") ",Nf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,x=n.zOrigin,v="",P=p==="auto"&&t&&t!==1||p===!0;if(x&&(u!==Ri||h!==Ri)){var R=parseFloat(h)*Er,b=Math.sin(R),A=Math.cos(R),M;R=parseFloat(u)*Er,M=Math.cos(R),o=xa(S,o,b*M*-x),a=xa(S,a,-Math.sin(R)*-x),l=xa(S,l,A*M*-x+x)}m!==Zr&&(v+="perspective("+m+Pi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(P||o!==Zr||a!==Zr||l!==Zr)&&(v+=l!==Zr||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Pi),c!==Ri&&(v+="rotate("+c+Pi),h!==Ri&&(v+="rotateY("+h+Pi),u!==Ri&&(v+="rotateX("+u+Pi),(f!==Ri||d!==Ri)&&(v+="skew("+f+", "+d+Pi),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Pi),S.style[pe]=v||"translate(0, 0)"},Wx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,x=parseFloat(o),v=parseFloat(a),P,R,b,A,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Er,c*=Er,P=Math.cos(l)*u,R=Math.sin(l)*u,b=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(h*=Er,M=Math.tan(c-h),M=Math.sqrt(1+M*M),b*=M,A*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),P*=M,R*=M)),P=ge(P),R=ge(R),b=ge(b),A=ge(A)):(P=u,A=f,R=b=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=yi(d,"x",o,"px"),v=yi(d,"y",a,"px")),(g||_||m||p)&&(x=ge(x+g-(g*P+_*b)+m),v=ge(v+_-(g*R+_*A)+p)),(i||s)&&(M=d.getBBox(),x=ge(x+i/100*M.width),v=ge(v+s/100*M.height)),M="matrix("+P+","+R+","+b+","+A+","+x+","+v+")",d.setAttribute("transform",M),S&&(d.style[pe]=M)},Xx=function(t,e,n,i,s){var o=360,a=we(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Di:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Hh)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Hh)%o-~~(c/o)*o)),t._pt=f=new Ze(t._pt,e,n,i,c,Ax),f.e=h,f.u="deg",t._props.push(n),f},Zh=function(t,e){for(var n in e)t[n]=e[n];return t},qx=function(t,e,n){var i=Zh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[pe]=e,a=_s(n,1),xi(n,pe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[pe],o[pe]=e,a=_s(n,1),o[pe]=c);for(l in Kn)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=Ue(c),g=Ue(h),u=d!==g?yi(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Ze(t._pt,a,l,u,f-u,bl),t._pt.u=g||0,t._props.push(l));Zh(a,i)};Ye("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});_o[t>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(g){return Vn(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var Of={name:"css",register:Al,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,S,x,v,P,R,b,A,M;sc||Al(),this.styles=this.styles||Rf(t),A=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(tn[_]&&vf(_,e,n,i,t,s)))){if(d=typeof h,g=_o[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=fs(h)),g)g(this,t,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",mi.lastIndex=0,mi.test(c)||(m=Ue(c),p=Ue(h),p?m!==p&&(c=yi(t,_,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),A.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],we(c)&&~c.indexOf("random(")&&(c=fs(c)),Ue(c+"")||c==="auto"||(c+=on.units[_]||Ue(Vn(t,_))||""),(c+"").charAt(1)==="="&&(c=Vn(t,_))):c=Vn(t,_),f=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in Rn&&(_==="autoAlpha"&&(f===1&&Vn(t,"visibility")==="hidden"&&u&&(f=0),A.push("visibility",0,a.visibility),ci(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Rn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Kn,x){if(this.styles.save(_),M=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=sn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var y=t.style.perspective;t.style.perspective=h,h=sn(t,"perspective"),y?t.style.perspective=y:xi(t,"perspective")}u=parseFloat(h)}if(v||(P=t._gsap,P.renderTransform&&!e.parseTransform||_s(t,e.parseTransform),R=e.smoothOrigin!==!1&&P.smooth,v=this._pt=new Ze(this._pt,a,pe,0,1,P.renderTransform,P,0,-1),v.dep=1),_==="scale")this._pt=new Ze(this._pt,P,"scaleY",P.scaleY,(S?Mr(P.scaleY,S+u):u)-P.scaleY||0,bl),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(je,0,a[je]),h=Hx(h),P.svg?Cl(t,h,0,R,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==P.zOrigin&&ci(this,P,"zOrigin",P.zOrigin,p),ci(this,a,_,go(c),go(h)));continue}else if(_==="svgOrigin"){Cl(t,h,1,R,0,this);continue}else if(_ in If){Xx(this,P,_,f,S?Mr(f,S+h):h);continue}else if(_==="smoothOrigin"){ci(this,P,"smooth",P.smooth,h);continue}else if(_==="force3D"){P[_]=h;continue}else if(_==="transform"){qx(this,h,t);continue}}else _ in a||(_=Ur(_)||_);if(x||(u||u===0)&&(f||f===0)&&!wx.test(h)&&_ in a)m=(c+"").substr((f+"").length),u||(u=0),p=Ue(h)||(_ in on.units?on.units[_]:m),m!==p&&(f=yi(t,_,c,p)),this._pt=new Ze(this._pt,x?P:a,_,f,(S?Mr(f,S+u):u)-f,!x&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Px:bl),this._pt.u=p||0,x&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=Rx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Cx);else if(_ in a)kx.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,i,s);else if(_!=="parseTransform"){jl(_,h);continue}x||(_ in a?A.push(_,0,a[_]):typeof t[_]=="function"?A.push(_,2,t[_]()):A.push(_,1,c||t[_])),o.push(_)}}b&&Tf(this)},render:function(t,e){if(e.tween._time||!oc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Vn,aliases:Rn,getSetter:function(t,e,n){var i=Rn[e];return i&&i.indexOf(",")<0&&(e=i),e in Kn&&e!==je&&(t._gsap.x||Vn(t,"x"))?n&&kh===n?e==="scale"?Ux:Ix:(kh=n||{})&&(e==="scale"?Nx:Ox):t.style&&!ql(t.style[e])?Lx:~e.indexOf("-")?Dx:ic(t,e)},core:{_removeProperty:xi,_getMatrix:lc}};Ke.utils.checkPrefix=Ur;Ke.core.getStyleSaver=Rf;(function(r,t,e,n){var i=Ye(r+","+t+","+e,function(s){Kn[s]=1});Ye(t,function(s){on.units[s]="deg",If[s]=1}),Rn[i[13]]=r+","+t,Ye(n,function(s){var o=s.split(":");Rn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){on.units[r]="px"});Ke.registerPlugin(Of);var Ge=Ke.registerPlugin(Of)||Ke;Ge.core.Tween;var cc={};(function r(t,e,n,i){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var U=new OffscreenCanvas(1,1),D=U.getContext("2d");D.fillRect(0,0,1,1);var it=U.transferToImageBitmap();D.createPattern(it,"no-repeat")}catch{return!1}return!0}();function l(){}function c(U){var D=e.exports.Promise,it=D!==void 0?D:t.Promise;return typeof it=="function"?new it(U):(U(l,l),null)}var h=function(U,D){return{transform:function(it){if(U)return it;if(D.has(it))return D.get(it);var pt=new OffscreenCanvas(it.width,it.height),k=pt.getContext("2d");return k.drawImage(it,0,0),D.set(it,pt),pt},clear:function(){D.clear()}}}(a,new Map),u=function(){var U=Math.floor(16.666666666666668),D,it,pt={},k=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(D=function(j){var at=Math.random();return pt[at]=requestAnimationFrame(function J(lt){k===lt||k+U-1<lt?(k=lt,delete pt[at],j()):pt[at]=requestAnimationFrame(J)}),at},it=function(j){pt[j]&&cancelAnimationFrame(pt[j])}):(D=function(j){return setTimeout(j,U)},it=function(j){return clearTimeout(j)}),{frame:D,cancel:it}}(),f=function(){var U,D,it={};function pt(k){function j(at,J){k.postMessage({options:at||{},callback:J})}k.init=function(J){var lt=J.transferControlToOffscreen();k.postMessage({canvas:lt},[lt])},k.fire=function(J,lt,yt){if(D)return j(J,null),D;var nt=Math.random().toString(36).slice(2);return D=c(function(Tt){function X(et){et.data.callback===nt&&(delete it[nt],k.removeEventListener("message",X),D=null,h.clear(),yt(),Tt())}k.addEventListener("message",X),j(J,nt),it[nt]=X.bind(null,{data:{callback:nt}})}),D},k.reset=function(){k.postMessage({reset:!0});for(var J in it)it[J](),delete it[J]}}return function(){if(U)return U;if(!n&&s){var k=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{U=new Worker(URL.createObjectURL(new Blob([k])))}catch(j){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",j),null}pt(U)}return U}}(),d={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(U,D){return D?D(U):U}function _(U){return U!=null}function m(U,D,it){return g(U&&_(U[D])?U[D]:d[D],it)}function p(U){return U<0?0:Math.floor(U)}function S(U,D){return Math.floor(Math.random()*(D-U))+U}function x(U){return parseInt(U,16)}function v(U){return U.map(P)}function P(U){var D=String(U).replace(/[^0-9a-f]/gi,"");return D.length<6&&(D=D[0]+D[0]+D[1]+D[1]+D[2]+D[2]),{r:x(D.substring(0,2)),g:x(D.substring(2,4)),b:x(D.substring(4,6))}}function R(U){var D=m(U,"origin",Object);return D.x=m(D,"x",Number),D.y=m(D,"y",Number),D}function b(U){U.width=document.documentElement.clientWidth,U.height=document.documentElement.clientHeight}function A(U){var D=U.getBoundingClientRect();U.width=D.width,U.height=D.height}function M(U){var D=document.createElement("canvas");return D.style.position="fixed",D.style.top="0px",D.style.left="0px",D.style.pointerEvents="none",D.style.zIndex=U,D}function y(U,D,it,pt,k,j,at,J,lt){U.save(),U.translate(D,it),U.rotate(j),U.scale(pt,k),U.arc(0,0,1,at,J,lt),U.restore()}function L(U){var D=U.angle*(Math.PI/180),it=U.spread*(Math.PI/180);return{x:U.x,y:U.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:U.startVelocity*.5+Math.random()*U.startVelocity,angle2D:-D+(.5*it-Math.random()*it),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:U.color,shape:U.shape,tick:0,totalTicks:U.ticks,decay:U.decay,drift:U.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:U.gravity*3,ovalScalar:.6,scalar:U.scalar,flat:U.flat}}function z(U,D){D.x+=Math.cos(D.angle2D)*D.velocity+D.drift,D.y+=Math.sin(D.angle2D)*D.velocity+D.gravity,D.velocity*=D.decay,D.flat?(D.wobble=0,D.wobbleX=D.x+10*D.scalar,D.wobbleY=D.y+10*D.scalar,D.tiltSin=0,D.tiltCos=0,D.random=1):(D.wobble+=D.wobbleSpeed,D.wobbleX=D.x+10*D.scalar*Math.cos(D.wobble),D.wobbleY=D.y+10*D.scalar*Math.sin(D.wobble),D.tiltAngle+=.1,D.tiltSin=Math.sin(D.tiltAngle),D.tiltCos=Math.cos(D.tiltAngle),D.random=Math.random()+2);var it=D.tick++/D.totalTicks,pt=D.x+D.random*D.tiltCos,k=D.y+D.random*D.tiltSin,j=D.wobbleX+D.random*D.tiltCos,at=D.wobbleY+D.random*D.tiltSin;if(U.fillStyle="rgba("+D.color.r+", "+D.color.g+", "+D.color.b+", "+(1-it)+")",U.beginPath(),o&&D.shape.type==="path"&&typeof D.shape.path=="string"&&Array.isArray(D.shape.matrix))U.fill(K(D.shape.path,D.shape.matrix,D.x,D.y,Math.abs(j-pt)*.1,Math.abs(at-k)*.1,Math.PI/10*D.wobble));else if(D.shape.type==="bitmap"){var J=Math.PI/10*D.wobble,lt=Math.abs(j-pt)*.1,yt=Math.abs(at-k)*.1,nt=D.shape.bitmap.width*D.scalar,Tt=D.shape.bitmap.height*D.scalar,X=new DOMMatrix([Math.cos(J)*lt,Math.sin(J)*lt,-Math.sin(J)*yt,Math.cos(J)*yt,D.x,D.y]);X.multiplySelf(new DOMMatrix(D.shape.matrix));var et=U.createPattern(h.transform(D.shape.bitmap),"no-repeat");et.setTransform(X),U.globalAlpha=1-it,U.fillStyle=et,U.fillRect(D.x-nt/2,D.y-Tt/2,nt,Tt),U.globalAlpha=1}else if(D.shape==="circle")U.ellipse?U.ellipse(D.x,D.y,Math.abs(j-pt)*D.ovalScalar,Math.abs(at-k)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI):y(U,D.x,D.y,Math.abs(j-pt)*D.ovalScalar,Math.abs(at-k)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI);else if(D.shape==="star")for(var C=Math.PI/2*3,gt=4*D.scalar,st=8*D.scalar,mt=D.x,ut=D.y,It=5,_t=Math.PI/It;It--;)mt=D.x+Math.cos(C)*st,ut=D.y+Math.sin(C)*st,U.lineTo(mt,ut),C+=_t,mt=D.x+Math.cos(C)*gt,ut=D.y+Math.sin(C)*gt,U.lineTo(mt,ut),C+=_t;else U.moveTo(Math.floor(D.x),Math.floor(D.y)),U.lineTo(Math.floor(D.wobbleX),Math.floor(k)),U.lineTo(Math.floor(j),Math.floor(at)),U.lineTo(Math.floor(pt),Math.floor(D.wobbleY));return U.closePath(),U.fill(),D.tick<D.totalTicks}function N(U,D,it,pt,k){var j=D.slice(),at=U.getContext("2d"),J,lt,yt=c(function(nt){function Tt(){J=lt=null,at.clearRect(0,0,pt.width,pt.height),h.clear(),k(),nt()}function X(){n&&!(pt.width===i.width&&pt.height===i.height)&&(pt.width=U.width=i.width,pt.height=U.height=i.height),!pt.width&&!pt.height&&(it(U),pt.width=U.width,pt.height=U.height),at.clearRect(0,0,pt.width,pt.height),j=j.filter(function(et){return z(at,et)}),j.length?J=u.frame(X):Tt()}J=u.frame(X),lt=Tt});return{addFettis:function(nt){return j=j.concat(nt),yt},canvas:U,promise:yt,reset:function(){J&&u.cancel(J),lt&&lt()}}}function W(U,D){var it=!U,pt=!!m(D||{},"resize"),k=!1,j=m(D,"disableForReducedMotion",Boolean),at=s&&!!m(D||{},"useWorker"),J=at?f():null,lt=it?b:A,yt=U&&J?!!U.__confetti_initialized:!1,nt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Tt;function X(C,gt,st){for(var mt=m(C,"particleCount",p),ut=m(C,"angle",Number),It=m(C,"spread",Number),_t=m(C,"startVelocity",Number),w=m(C,"decay",Number),E=m(C,"gravity",Number),G=m(C,"drift",Number),Q=m(C,"colors",v),ot=m(C,"ticks",Number),tt=m(C,"shapes"),Rt=m(C,"scalar"),vt=!!m(C,"flat"),bt=R(C),Vt=mt,ct=[],At=U.width*bt.x,Nt=U.height*bt.y;Vt--;)ct.push(L({x:At,y:Nt,angle:ut,spread:It,startVelocity:_t,color:Q[Vt%Q.length],shape:tt[S(0,tt.length)],ticks:ot,decay:w,gravity:E,drift:G,scalar:Rt,flat:vt}));return Tt?Tt.addFettis(ct):(Tt=N(U,ct,lt,gt,st),Tt.promise)}function et(C){var gt=j||m(C,"disableForReducedMotion",Boolean),st=m(C,"zIndex",Number);if(gt&&nt)return c(function(_t){_t()});it&&Tt?U=Tt.canvas:it&&!U&&(U=M(st),document.body.appendChild(U)),pt&&!yt&&lt(U);var mt={width:U.width,height:U.height};J&&!yt&&J.init(U),yt=!0,J&&(U.__confetti_initialized=!0);function ut(){if(J){var _t={getBoundingClientRect:function(){if(!it)return U.getBoundingClientRect()}};lt(_t),J.postMessage({resize:{width:_t.width,height:_t.height}});return}mt.width=mt.height=null}function It(){Tt=null,pt&&(k=!1,t.removeEventListener("resize",ut)),it&&U&&(document.body.contains(U)&&document.body.removeChild(U),U=null,yt=!1)}return pt&&!k&&(k=!0,t.addEventListener("resize",ut,!1)),J?J.fire(C,mt,It):X(C,mt,It)}return et.reset=function(){J&&J.reset(),Tt&&Tt.reset()},et}var q;function H(){return q||(q=W(null,{useWorker:!0,resize:!0})),q}function K(U,D,it,pt,k,j,at){var J=new Path2D(U),lt=new Path2D;lt.addPath(J,new DOMMatrix(D));var yt=new Path2D;return yt.addPath(lt,new DOMMatrix([Math.cos(at)*k,Math.sin(at)*k,-Math.sin(at)*j,Math.cos(at)*j,it,pt])),yt}function V(U){if(!o)throw new Error("path confetti are not supported in this browser");var D,it;typeof U=="string"?D=U:(D=U.path,it=U.matrix);var pt=new Path2D(D),k=document.createElement("canvas"),j=k.getContext("2d");if(!it){for(var at=1e3,J=at,lt=at,yt=0,nt=0,Tt,X,et=0;et<at;et+=2)for(var C=0;C<at;C+=2)j.isPointInPath(pt,et,C,"nonzero")&&(J=Math.min(J,et),lt=Math.min(lt,C),yt=Math.max(yt,et),nt=Math.max(nt,C));Tt=yt-J,X=nt-lt;var gt=10,st=Math.min(gt/Tt,gt/X);it=[st,0,0,st,-Math.round(Tt/2+J)*st,-Math.round(X/2+lt)*st]}return{type:"path",path:D,matrix:it}}function ft(U){var D,it=1,pt="#000000",k='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof U=="string"?D=U:(D=U.text,it="scalar"in U?U.scalar:it,k="fontFamily"in U?U.fontFamily:k,pt="color"in U?U.color:pt);var j=10*it,at=""+j+"px "+k,J=new OffscreenCanvas(j,j),lt=J.getContext("2d");lt.font=at;var yt=lt.measureText(D),nt=Math.ceil(yt.actualBoundingBoxRight+yt.actualBoundingBoxLeft),Tt=Math.ceil(yt.actualBoundingBoxAscent+yt.actualBoundingBoxDescent),X=2,et=yt.actualBoundingBoxLeft+X,C=yt.actualBoundingBoxAscent+X;nt+=X+X,Tt+=X+X,J=new OffscreenCanvas(nt,Tt),lt=J.getContext("2d"),lt.font=at,lt.fillStyle=pt,lt.fillText(D,et,C);var gt=1/it;return{type:"bitmap",bitmap:J.transferToImageBitmap(),matrix:[gt,0,0,gt,-nt*gt/2,-Tt*gt/2]}}e.exports=function(){return H().apply(this,arguments)},e.exports.reset=function(){H().reset()},e.exports.create=W,e.exports.shapeFromPath=V,e.exports.shapeFromText=ft})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),cc,!1);const ya=cc.exports;cc.exports.create;const jh={type:"change"},hc={type:"start"},Ff={type:"end"},js=new Mo,Kh=new si,Yx=Math.cos(70*Cd.DEG2RAD),ye=new I,ke=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ma=1e-6;class Zx extends Av{constructor(t,e=null){super(t,e),this.state=te.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Wi,this._lastTargetPosition=new I,this._quat=new Wi().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ph,this._sphericalDelta=new Ph,this._scale=1,this._panOffset=new I,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new I,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kx.bind(this),this._onPointerDown=jx.bind(this),this._onPointerUp=Jx.bind(this),this._onContextMenu=ry.bind(this),this._onMouseWheel=ty.bind(this),this._onKeyDown=ey.bind(this),this._onTouchStart=ny.bind(this),this._onTouchMove=iy.bind(this),this._onMouseDown=$x.bind(this),this._onMouseMove=Qx.bind(this),this._interceptControlDown=sy.bind(this),this._interceptControlUp=oy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jh),this.update(),this.state=te.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ke:n>Math.PI&&(n-=ke),i<-Math.PI?i+=ke:i>Math.PI&&(i-=ke),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ye.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(js.origin.copy(this.object.position),js.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(js.direction))<Yx?this.object.lookAt(this.target):(Kh.setFromNormalAndCoplanarPoint(this.object.up,this.target),js.intersectPlane(Kh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ma||this._lastTargetPosition.distanceToSquared(this.target)>Ma?(this.dispatchEvent(jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ke/60*this.autoRotateSpeed*t:ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ye.copy(i).sub(this.target);let s=ye.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function jx(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Kx(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Jx(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ff),this.state=te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $x(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=te.DOLLY;break;case gr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=te.ROTATE}break;case gr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(hc)}function Qx(r){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function ty(r){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(r.preventDefault(),this.dispatchEvent(hc),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ff))}function ey(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function ny(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=te.TOUCH_ROTATE;break;case fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=te.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(hc)}function iy(r){switch(this._trackPointer(r),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=te.NONE}}function ry(r){this.enabled!==!1&&r.preventDefault()}function sy(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oy(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ay{constructor(t){this.canvas=t,this.interactiveObjects=[],this.onSelectObject=null,this.isFlying=!1,this.tourActive=!1,this.tourIndex=0,this.tourTimeout=null,this.init(),this.setupLights(),this.setupControls(),this.setupRaycaster(),this.setupResize()}init(){this.width=window.innerWidth,this.height=window.innerHeight,this.scene=new G0,this.scene.background=null,this.camera=new en(55,this.width/this.height,.1,1e3),this.initialPosition=new I(0,32,75),this.camera.position.copy(this.initialPosition),this.renderer=new H0({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=eu,this.renderer.toneMappingExposure=1.15}setupLights(){const t=new bv(16773618,1.1);this.scene.add(t);const e=new Sv(16642808,3018808,.9);this.scene.add(e);const n=new Ah(16776171,2.2);n.position.set(35,50,40),this.scene.add(n);const i=new Ah(16020150,.8);i.position.set(-30,-15,-30),this.scene.add(i)}setupControls(){this.controls=new Zx(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=6,this.controls.maxDistance=160,this.controls.maxPolarAngle=Math.PI/1.7,this.controls.target.set(0,0,0)}setupRaycaster(){this.raycaster=new wv,this.mouse=new ht,this.hoveredObject=null,this.tooltip=document.getElementById("hover-tooltip"),this.tooltipText=document.getElementById("tooltip-text"),window.addEventListener("mousemove",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.tooltip&&!this.tooltip.classList.contains("hidden")&&(this.tooltip.style.left=`${e.clientX}px`,this.tooltip.style.top=`${e.clientY}px`)});const t=(e,n)=>{this.mouse.x=e/window.innerWidth*2-1,this.mouse.y=-(n/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const i=this.interactiveObjects.map(o=>o.mesh),s=this.raycaster.intersectObjects(i);if(s.length>0){const o=s[0].object.userData;o&&this.onSelectObject&&this.onSelectObject(o)}};window.addEventListener("click",e=>{e.target.closest("#ui-container")&&!e.target.classList.contains("modal-backdrop")||t(e.clientX,e.clientY)}),window.addEventListener("touchend",e=>{if(e.changedTouches.length>0){const n=e.changedTouches[0];if(e.target.closest("#ui-container")&&!e.target.classList.contains("modal-backdrop"))return;t(n.clientX,n.clientY)}})}checkHover(){if(this.isFlying)return;this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.interactiveObjects.map(n=>n.mesh),e=this.raycaster.intersectObjects(t);if(e.length>0){document.body.style.cursor="pointer";const n=e[0].object.userData;this.tooltip&&n&&(this.tooltipText.textContent=`${n.type==="letter"?"💌":"🌻"} ${n.title}`,this.tooltip.classList.remove("hidden"))}else document.body.style.cursor="default",this.tooltip&&this.tooltip.classList.add("hidden")}setupResize(){window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))})}flyToObject(t,e=null){if(!t)return;this.isFlying=!0,this.controls.enabled=!1;const n=new I;t.group?t.group.getWorldPosition(n):n.copy(t.targetPosition);const i=n.clone().add(t.cameraOffset),s=this.controls.target.clone();Ge.killTweensOf(this.camera.position),Ge.killTweensOf(s),Ge.to(this.camera.position,{x:i.x,y:i.y,z:i.z,duration:2.2,ease:"power3.inOut"}),Ge.to(s,{x:n.x,y:n.y,z:n.z,duration:2.2,ease:"power3.inOut",onUpdate:()=>{this.controls.target.copy(s)},onComplete:()=>{this.isFlying=!1,this.controls.enabled=!0,e&&e()}})}resetCamera(){this.stopTour(),this.isFlying=!0,this.controls.enabled=!1;const t=this.controls.target.clone();Ge.to(this.camera.position,{x:this.initialPosition.x,y:this.initialPosition.y,z:this.initialPosition.z,duration:2,ease:"power2.inOut"}),Ge.to(t,{x:0,y:0,z:0,duration:2,ease:"power2.inOut",onUpdate:()=>{this.controls.target.copy(t)},onComplete:()=>{this.isFlying=!1,this.controls.enabled=!0}})}startTour(t){this.tourActive=!0,this.tourIndex=0;const e=()=>{if(!this.tourActive)return;const n=this.interactiveObjects[this.tourIndex];this.flyToObject(n,()=>{t&&t(n),this.tourTimeout=setTimeout(()=>{this.tourActive&&(this.tourIndex=(this.tourIndex+1)%this.interactiveObjects.length,e())},5500)})};e()}stopTour(){this.tourActive=!1,this.tourTimeout&&(clearTimeout(this.tourTimeout),this.tourTimeout=null)}render(){this.controls.update(),this.checkHover(),this.renderer.render(this.scene,this.camera)}}function ly(r,t=2e3){const e=new Oe,n=new Float32Array(t*3),i=new Float32Array(t*3),s=[new Xt("#FFFBEB"),new Xt("#FEF08A"),new Xt("#FACC15"),new Xt("#F472B6"),new Xt("#FBCFE8"),new Xt("#E9D5FF")];for(let l=0;l<t;l++){const c=100+Math.random()*260,h=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1);n[l*3]=c*Math.sin(u)*Math.cos(h),n[l*3+1]=c*Math.sin(u)*Math.sin(h),n[l*3+2]=c*Math.cos(u);const f=s[Math.floor(Math.random()*s.length)];i[l*3]=f.r,i[l*3+1]=f.g,i[l*3+2]=f.b}e.setAttribute("position",new mn(n,3)),e.setAttribute("color",new mn(i,3));const o=new Zn({vertexShader:`
      attribute vec3 color;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(260.0 / -mvPosition.z, 1.2, 5.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float strength = pow(1.0 - (dist * 2.0), 1.5);
        gl_FragColor = vec4(vColor, strength * 0.95);
      }
    `,transparent:!0,depthWrite:!1,blending:Ea}),a=new W0(e,o);return r.add(a),{mesh:a,update:l=>{a.rotation.y=l*.012}}}function cy(r,t=140){const e=new Te,n=new fi;n.moveTo(0,0),n.bezierCurveTo(.5,.7,.7,1.8,0,2.3),n.bezierCurveTo(-.7,1.8,-.5,.7,0,0);const i=new Yi(n,8),s=i.attributes.position;for(let c=0;c<s.count;c++){const h=s.getY(c);s.setZ(c,Math.sin(h/2.3*Math.PI)*.22)}i.computeVertexNormals();const o=new Ie({color:16436245,emissive:13273604,emissiveIntensity:.22,roughness:.35,metalness:.1,side:De}),a=new Ie({color:16020150,emissive:10295117,emissiveIntensity:.25,roughness:.35,metalness:.1,side:De}),l=[];for(let c=0;c<t;c++){const h=c%4===0,u=new Wt(i,h?a:o),f=18+Math.random()*85,d=Math.random()*Math.PI*2,g=(Math.random()-.5)*50;u.position.set(Math.cos(d)*f,g,Math.sin(d)*f);const _=.25+Math.random()*.35;u.scale.set(_,_,_),u.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),e.add(u),l.push({mesh:u,speedY:.01+Math.random()*.02,rotX:(Math.random()-.5)*.015,rotY:(Math.random()-.5)*.015,rotZ:(Math.random()-.5)*.015,orbitSpeed:.003+Math.random()*.006,radius:f,angle:d})}return r.add(e),{group:e,update:()=>{l.forEach(c=>{c.mesh.rotation.x+=c.rotX,c.mesh.rotation.y+=c.rotY,c.mesh.rotation.z+=c.rotZ,c.angle+=c.orbitSpeed,c.mesh.position.x=Math.cos(c.angle)*c.radius,c.mesh.position.z=Math.sin(c.angle)*c.radius,c.mesh.position.y+=Math.sin(c.angle*2)*.03})}}}const hy=new Ie({color:16436245,emissive:13273604,emissiveIntensity:.35,roughness:.3,metalness:.1,side:De}),uy=new Ie({color:16638023,emissive:15381256,emissiveIntensity:.4,roughness:.25,metalness:.15,side:De}),fy=new Ie({color:4528643,emissive:7877903,emissiveIntensity:.2,roughness:.8,metalness:.1}),Sa=new Ie({color:1409085,roughness:.5,metalness:.1});function uc(r=2.4,t=.65,e=.25){const n=new fi;n.moveTo(0,0),n.bezierCurveTo(t*.7,r*.3,t,r*.7,0,r),n.bezierCurveTo(-t,r*.7,-t*.7,r*.3,0,0);const i=new Yi(n,8),s=i.attributes.position;for(let o=0;o<s.count;o++){const a=s.getY(o);s.setZ(o,Math.sin(a/r*Math.PI)*e)}return i.computeVertexNormals(),i}const dy=uc(2.5,.7,.3),py=uc(1.9,.55,.2);function oo(r=1,t={}){const e=new Te,n=new zr(1.2,1,.45,24),i=new Wt(n,fy);i.rotation.x=Math.PI/2,e.add(i);const s=new Ln(.75,16,16),o=new gi({color:16096779,transparent:!0,opacity:.65}),a=new Wt(s,o);a.scale.set(1.2,1.2,.4),e.add(a);const l=22,c=new Te;for(let _=0;_<l;_++){const m=_/l*Math.PI*2,p=new Wt(dy,hy);p.position.set(0,0,-.05),p.rotation.z=m,p.rotation.x=.12+Math.sin(_*1.5)*.05,c.add(p)}e.add(c);const h=18,u=new Te;for(let _=0;_<h;_++){const m=_/h*Math.PI*2+Math.PI/h,p=new Wt(py,uy);p.position.set(0,0,.08),p.rotation.z=m,p.rotation.x=-.08+Math.cos(_*2)*.04,u.add(p)}e.add(u);const f=new To(1.1,.7,16),d=new Wt(f,Sa);if(d.position.set(0,0,-.4),d.rotation.x=-Math.PI/2,e.add(d),t.hasStem!==!1){const _=new Hl(new I(0,0,-.4),new I(0,-1.5,-.8),new I(.5,-3.5,-1.2),new I(.2,-6,-1.5)),m=new wo(_,20,.18,8,!1),p=new Wt(m,Sa);e.add(p);const S=uc(2,.9,.2),x=new Wt(S,Sa);x.position.set(.3,-2.5,-1),x.rotation.set(.4,.6,1.2),x.scale.set(.8,.8,.8),e.add(x)}const g=new ls(16436245,1.2,18);return g.position.set(0,0,1),e.add(g),e.scale.set(r,r,r),e}function my(){const r=new Te,t=oo(1.5,{hasStem:!1});t.position.set(0,1.2,0),r.add(t);const e=8;for(let l=0;l<e;l++){const c=l/e*Math.PI*2,h=oo(1.05,{hasStem:!1}),u=2.8;h.position.set(Math.cos(c)*u,.3+Math.sin(l*2)*.4,Math.sin(c)*u),h.rotation.x=Math.sin(c)*.6,h.rotation.y=-Math.cos(c)*.6,r.add(h)}for(let l=0;l<6;l++){const c=l/6*Math.PI*2+.5,h=oo(.85,{hasStem:!1}),u=4.2;h.position.set(Math.cos(c)*u,-1.4,Math.sin(c)*u),h.rotation.x=Math.sin(c)*.9,h.rotation.y=-Math.cos(c)*.9,r.add(h)}const n=new Wl(5.2,.12,16,64),i=new Ie({color:16707722,emissive:16436245,emissiveIntensity:.6,metalness:.8,roughness:.2}),s=new Wt(n,i);s.rotation.x=Math.PI/2.3,r.add(s);const o=new Wt(n,i);o.rotation.x=-Math.PI/2.8,o.rotation.y=.4,o.scale.set(1.2,1.2,1.2),r.add(o);const a=new ls(16436245,3.5,45);return r.add(a),r}function _y(r){const t=[],e=my();e.position.set(0,0,0),r.add(e);const n=new Ln(5.5,16,16),i=new gi({visible:!1}),s=new Wt(n,i);e.add(s);const o={id:"flower-grand-bouquet",title:"El Gran Ramo Celestial 🌻👑",date:"21 de Septiembre — Día de las Flores Amarillas",type:"bouquet",body:"Este ramo infinito reúne millones de destellos dorados del cosmos. Dicen que regalar flores amarillas es regalar luz, alegría pura y la promesa de permanecer juntos en cada primavera de la vida.",author:"El Universo Entero Para Ti ✨",mesh:s,targetPosition:new I(0,0,0),cameraOffset:new I(0,4,15)};return s.userData=o,t.push(o),[{id:"flower-1",title:"Girasol de la Esperanza 🌻",scale:1.3,radius:24,angle:.3,y:4,body:"Así como el girasol nunca deja de buscar al sol, mi corazón siempre encuentra su dirección hacia ti. Gracias por ser esa luz cálida que ilumina cualquier día gris.",author:"Con admiración infinita"},{id:"flower-2",title:"Flor de la Alegría Eterna 💛",scale:1.1,radius:36,angle:1.8,y:-6,body:"El amarillo es el color de tu risa, de los días soleados a tu lado y de los recuerdos felices que guardo como el tesoro más preciado de este universo.",author:"Por siempre tu refugio"},{id:"flower-3",title:"Girasol del Amor Radiante 🌟",scale:1.4,radius:48,angle:3.2,y:8,body:"Te regalo estas flores no solo para cumplir una tradición, sino para recordarte lo extraordinario que es coincidir contigo en esta inmensidad del tiempo y el espacio.",author:"De quien más te quiere"},{id:"flower-4",title:"Margarita de la Paz Dorada 🌼",scale:1,radius:60,angle:4.6,y:-5,body:"Que la serenidad y la dulzura de estos pétalos amarillos te acompañen en cada paso. Eres magia, calma y primavera viva.",author:"Un suspiro cósmico"},{id:"flower-5",title:"Girasol de los Sueños Cumplidos ✨",scale:1.25,radius:72,angle:5.7,y:7,body:"Que cada pétalo de este universo sea un deseo que florece para ti. Mereces todos los cielos despejados y todos los soles del mundo.",author:"Para la persona más especial"}].forEach(l=>{const c=oo(l.scale),h=Math.cos(l.angle)*l.radius,u=Math.sin(l.angle)*l.radius;c.position.set(h,l.y,u),c.lookAt(h*1.5,l.y+6,u*1.5),c.rotation.z+=(Math.random()-.5)*.2,r.add(c);const f=new Ln(3.5*l.scale,12,12),d=new Wt(f,i);c.add(d);const g={id:l.id,title:l.title,date:"21 de Septiembre",type:"flower",body:l.body,author:l.author,mesh:d,group:c,orbitRadius:l.radius,orbitAngle:l.angle,orbitSpeed:.0012/(l.radius*.04),y:l.y,scale:l.scale,targetPosition:c.position,cameraOffset:new I(h*.35,l.y+2,u*.35).normalize().multiplyScalar(10)};d.userData=g,t.push(g)}),{flowers:t,grandBouquet:e,update:()=>{e.rotation.y+=.002,e.rotation.x=Math.sin(Date.now()*8e-4)*.05,t.forEach(l=>{if(l.type==="flower"&&l.group){l.orbitAngle+=l.orbitSpeed;const c=Math.cos(l.orbitAngle)*l.orbitRadius,h=Math.sin(l.orbitAngle)*l.orbitRadius;l.group.position.x=c,l.group.position.z=h,l.group.position.y=l.y+Math.sin(Date.now()*.0012+l.orbitRadius)*.8,l.group.lookAt(c*1.5,l.y+6,h*1.5),l.group.rotation.z+=Math.sin(Date.now()*.001+l.orbitRadius)*.04}})}}}const Jh=new Ie({color:16776171,roughness:.6,metalness:.05}),gy=new Ie({color:16436245,emissive:13273604,emissiveIntensity:.3,roughness:.2,metalness:.8}),vy=new Ie({color:10033947,emissive:8330525,emissiveIntensity:.25,roughness:.35,metalness:.2}),xy=new Ie({color:16707722,emissive:16436245,emissiveIntensity:.6,roughness:.2,metalness:.9});function $h(r=1){const t=new Te,e=new Xi(3.2,2.2,.12),n=new Wt(e,Jh);t.add(n);const i=new Xi(3.28,2.28,.08),s=new Wt(i,gy);s.position.z=-.03,t.add(s);const o=new fi;o.moveTo(-1.6,1.1),o.lineTo(1.6,1.1),o.lineTo(0,0),o.closePath();const a=new Yi(o),l=new Wt(a,Jh);l.position.z=.07,t.add(l);const c=new zr(.38,.42,.12,16),h=new Wt(c,vy);h.position.set(0,0,.12),h.rotation.x=Math.PI/2,t.add(h);const u=new Ln(.16,8,8),f=new Wt(u,xy);f.position.set(0,0,.19),f.scale.set(1.2,1.2,.4),t.add(f);const d=new ls(16436245,.8,12);return d.position.set(0,0,.8),t.add(d),t.scale.set(r,r,r),t}function yy(r){const t=[],e=[{id:"letter-1",recipient:"Para Ti",title:"Carta a Mi Flor de Primavera 🌻",date:"Septiembre 21",body:"Si cada estrella de esta noche fuera una flor amarilla, aun así no alcanzarían para expresar la infinita alegría que trae tu presencia a mi vida. Que nunca te falte la luz ni la sonrisa tan hermosa que ilumina todo.",author:"Con todo mi amor",radius:18,angle:1.1,y:7,scale:1.05},{id:"letter-2",recipient:"Para Mi Amor",title:"Promesa Entre Pétalos Dorados ✨",date:"Eterno Presente",body:"Te prometo cuidar de nosotros como se cuida a la flor más preciada del jardín. Te prometo risas en los días difíciles, abrazos eternos y flores amarillas en cada septiembre de nuestras vidas.",author:"Tuyo por siempre",radius:30,angle:2.6,y:-8,scale:1.1},{id:"letter-3",recipient:"Para Mi Persona Favorita",title:"Mi Universo Eres Tú 💛",date:"Bajo el cielo estrellado",body:"En medio de tantas galaxias y caminos posibles, coincidir contigo ha sido el regalo más hermoso del destino. Estas flores amarillas no marchitan jamás, igual que lo que siento por ti.",author:"De quien no deja de pensar en ti",radius:42,angle:4.1,y:6,scale:1},{id:"letter-4",recipient:"Para Quien Lee Esto",title:"Un Deseo de Luz y Calidez 🌼",date:"Hoy y Siempre",body:"Que la energía radiante del color amarillo te llene de esperanza, vitalidad y amor. Que florezcas con fuerza, con orgullo y con la certeza de que tu luz es única en todo el universo.",author:"Un susurro de las estrellas",radius:54,angle:5.3,y:-4,scale:.95}],n=new gi({visible:!1});return e.forEach(i=>{const s=$h(i.scale),o=Math.cos(i.angle)*i.radius,a=Math.sin(i.angle)*i.radius;s.position.set(o,i.y,a),s.lookAt(o*1.5,i.y+5,a*1.5),s.rotation.z+=.1,r.add(s);const l=new Ln(2.8*i.scale,8,8),c=new Wt(l,n);s.add(c);const h={id:i.id,title:i.title,recipient:i.recipient,date:i.date,type:"letter",body:i.body,author:i.author,mesh:c,group:s,orbitRadius:i.radius,orbitAngle:i.angle,orbitSpeed:.0018/(i.radius*.05),y:i.y,scale:i.scale,targetPosition:s.position,cameraOffset:new I(o*.35,i.y+1.5,a*.35).normalize().multiplyScalar(8)};c.userData=h,t.push(h)}),{letters:t,addCustomLetter:i=>{const s=22+Math.random()*32,o=Math.random()*Math.PI*2,a=(Math.random()-.5)*14,l=1.15,c=$h(l),h=Math.cos(o)*s,u=Math.sin(o)*s;c.position.set(h,a,u),c.lookAt(0,0,0),r.add(c);const f=new Ln(2.8*l,8,8),d=new Wt(f,n);c.add(d);const g={id:"letter-custom-"+Date.now(),title:i.title,recipient:i.recipient,date:"Hoy • Recién enviada al cosmos ✨",type:"letter",body:i.message,author:i.sender,mesh:d,group:c,orbitRadius:s,orbitAngle:o,orbitSpeed:.0016/(s*.05),y:a,scale:l,targetPosition:c.position,cameraOffset:new I(h*.35,a+1.5,u*.35).normalize().multiplyScalar(8)};return d.userData=g,t.push(g),g},update:()=>{t.forEach(i=>{if(i.group){i.orbitAngle+=i.orbitSpeed;const s=Math.cos(i.orbitAngle)*i.orbitRadius,o=Math.sin(i.orbitAngle)*i.orbitRadius;i.group.position.x=s,i.group.position.z=o,i.group.position.y=i.y+Math.sin(Date.now()*.0015+i.orbitRadius)*.7,i.group.lookAt(s*1.5,i.y+5,o*1.5),i.group.rotation.z+=Math.sin(Date.now()*.001+i.orbitRadius)*.05}})}}}const My="/assets/Harry%20Styles%20-%20Coming%20Up%20Roses%20(Official%20Lyric%20Video)-ghtITwSx.mp3";class Sy{constructor(){this.ctx=null,this.isPlaying=!1,this.audio=new Audio(My),this.audio.loop=!0,this.audio.volume=.65,this.fadeInterval=null}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}this.ctx.state==="suspended"&&this.ctx.resume()}toggle(){return this.init(),this.isPlaying?(this.stop(),!1):(this.play(),!0)}play(){this.init(),this.isPlaying=!0,this.audio.volume=.65;const t=this.audio.play();t!==void 0&&t.catch(e=>{console.log("Audio autoplay pendiente de interacción del usuario:",e)})}stop(){this.isPlaying=!1,this.audio.pause()}playChime(){if(this.init(),!this.ctx)return;const t=this.ctx.currentTime;[587.33,739.99,880,1174.66].forEach((n,i)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,t+i*.07),o.gain.setValueAtTime(1e-4,t+i*.07),o.gain.linearRampToValueAtTime(.06,t+i*.07+.03),o.gain.exponentialRampToValueAtTime(1e-4,t+i*.07+1.2),s.connect(o),o.connect(this.ctx.destination),s.start(t+i*.07),s.stop(t+i*.07+1.2)})}}const He=new Sy;class Ey{constructor(t){this.scene=t,this.group=new Te,this.petals=[],this.innerPetals=[],this.leaves=[],this.isBlooming=!1,this.timeline=null,this.buildFlowerHierarchy(),this.scene.add(this.group)}buildFlowerHierarchy(){const t=new Ie({color:7877903,roughness:.6,metalness:.2,emissive:4528643,emissiveIntensity:.3}),e=new Ie({color:1483594,roughness:.5,metalness:.1}),n=new Ie({color:4135426,roughness:.75,metalness:.15,emissive:7877903,emissiveIntensity:.25}),i=new Ie({color:16436245,emissive:13273604,emissiveIntensity:.35,roughness:.3,metalness:.1,side:De}),s=new Ie({color:16638023,emissive:15381256,emissiveIntensity:.4,roughness:.25,metalness:.15,side:De});this.seedGroup=new Te;const o=new fi;o.moveTo(0,.75),o.bezierCurveTo(.42,.38,.4,-.35,0,-.8),o.bezierCurveTo(-.4,-.35,-.42,.38,0,.75);const a={depth:.28,bevelEnabled:!0,bevelSegments:6,steps:1,bevelSize:.14,bevelThickness:.14},l=new Gl(o,a);l.center(),this.seedMesh=new Wt(l,t),this.seedMesh.scale.set(1.4,1.4,1.4),this.seedGroup.add(this.seedMesh);const c=new Vl(.75,1.35,32),h=new gi({color:16638023,side:De,transparent:!0,opacity:.65});this.seedHalo=new Wt(c,h),this.seedHalo.rotation.x=-Math.PI/2,this.seedHalo.position.y=-.2,this.seedGroup.add(this.seedHalo),this.seedLight=new ls(16436245,2.8,15),this.seedLight.position.set(0,.3,.8),this.seedGroup.add(this.seedLight),this.group.add(this.seedGroup),this.stemGroup=new Te,this.stemGroup.position.set(0,0,0);const u=new Hl(new I(0,0,0),new I(.2,2.5,.1),new I(-.3,5,-.1),new I(0,7.5,0)),f=new wo(u,32,.18,10,!1);this.stemMesh=new Wt(f,e),this.stemGroup.add(this.stemMesh);const g=(()=>{const A=new fi;A.moveTo(0,0),A.bezierCurveTo(.7,.8,.9,1.8,0,2.4),A.bezierCurveTo(-.9,1.8,-.7,.8,0,0);const M=new Yi(A,8),y=M.attributes.position;for(let L=0;L<y.count;L++){const z=y.getY(L);y.setZ(L,Math.sin(z/2.4*Math.PI)*.25)}return M.computeVertexNormals(),M})();this.leaf1=new Wt(g,e),this.leaf1.position.set(-.1,2.8,.1),this.leaf1.rotation.set(.4,-.8,1.1),this.leaf1.scale.set(.001,.001,.001),this.stemGroup.add(this.leaf1),this.leaf2=new Wt(g,e),this.leaf2.position.set(.15,4.8,-.1),this.leaf2.rotation.set(-.3,.9,-1),this.leaf2.scale.set(.001,.001,.001),this.stemGroup.add(this.leaf2),this.group.add(this.stemGroup),this.flowerHead=new Te,this.flowerHead.position.set(0,7.5,0),this.flowerHead.rotation.x=-.3;const _=new To(1.2,.8,16);this.calyx=new Wt(_,e),this.calyx.position.set(0,0,-.4),this.calyx.rotation.x=-Math.PI/2,this.flowerHead.add(this.calyx);const m=new zr(1.3,1,.45,24);this.disc=new Wt(m,n),this.disc.rotation.x=Math.PI/2,this.flowerHead.add(this.disc);const p=new Ln(.8,16,16),S=new gi({color:16096779});this.glowDisc=new Wt(p,S),this.glowDisc.scale.set(1.2,1.2,.4),this.flowerHead.add(this.glowDisc);const x=(A,M)=>{const y=new fi;y.moveTo(0,0),y.bezierCurveTo(M*.7,A*.3,M,A*.7,0,A),y.bezierCurveTo(-M,A*.7,-M*.7,A*.3,0,0);const L=new Yi(y,8),z=L.attributes.position;for(let N=0;N<z.count;N++){const W=z.getY(N);z.setZ(N,Math.sin(W/A*Math.PI)*.3)}return L.computeVertexNormals(),L},v=x(2.6,.75),P=x(1.9,.58),R=22;this.outerRing=new Te;for(let A=0;A<R;A++){const M=A/R*Math.PI*2,y=new Te;y.rotation.z=M;const L=new Wt(v,i);L.rotation.x=Math.PI*.45,L.scale.set(.001,.001,.001),y.add(L),this.outerRing.add(y),this.petals.push({pivot:y,petal:L,openAngle:.12})}this.flowerHead.add(this.outerRing);const b=18;this.innerRing=new Te;for(let A=0;A<b;A++){const M=A/b*Math.PI*2+Math.PI/b,y=new Te;y.rotation.z=M;const L=new Wt(P,s);L.position.z=.08,L.rotation.x=Math.PI*.48,L.scale.set(.001,.001,.001),y.add(L),this.innerRing.add(y),this.innerPetals.push({pivot:y,petal:L,openAngle:-.08})}this.flowerHead.add(this.innerRing),this.flowerLight=new ls(16436245,.1,20),this.flowerLight.position.set(0,0,1.2),this.flowerHead.add(this.flowerLight),this.stemGroup.scale.set(.001,.001,.001),this.flowerHead.scale.set(.001,.001,.001),this.disc.scale.set(.001,.001,.001),this.glowDisc.scale.set(.001,.001,.001),this.group.add(this.flowerHead)}resetToSeedState(t,e){if(this.timeline&&this.timeline.kill(),this.isBlooming=!1,this.seedMesh.scale.set(1.4,1.4,1.4),this.seedHalo&&this.seedHalo.scale.set(1,1,1),this.seedLight.intensity=2.8,this.stemGroup.scale.set(.001,.001,.001),this.leaf1.scale.set(.001,.001,.001),this.leaf2.scale.set(.001,.001,.001),this.flowerHead.scale.set(.001,.001,.001),this.flowerHead.rotation.set(-.3,0,0),this.disc.scale.set(.001,.001,.001),this.glowDisc.scale.set(.001,.001,.001),this.flowerLight.intensity=.1,this.petals.forEach(n=>{n.petal.scale.set(.001,.001,.001),n.petal.rotation.x=Math.PI*.45}),this.innerPetals.forEach(n=>{n.petal.scale.set(.001,.001,.001),n.petal.rotation.x=Math.PI*.48}),t&&e){const n=this.group.position.x,i=this.group.position.y,s=this.group.position.z;t.position.set(n,i+.4,s+4.2),e.target.set(n,i+.1,s),e.enabled=!1}}playGrowthAnimation({camera:t,controls:e,onProgressText:n,onOpenSceneCircle:i,onComplete:s}){this.resetToSeedState(t,e),this.isBlooming=!0,e.enabled=!1;const o=this.group.position.x,a=this.group.position.y,l=this.group.position.z,c=e.target;this.timeline=Ge.timeline({onComplete:()=>{this.isBlooming=!1,e.enabled=!0,s&&s()}}),this.timeline.call(()=>{n&&n("En la inmensidad del espacio, late una pequeña semilla...")}),this.timeline.to(this.seedMesh.scale,{x:1.65,y:1.65,z:1.65,duration:1.2,yoyo:!0,repeat:1,ease:"sine.inOut"}),this.seedHalo&&this.timeline.to(this.seedHalo.scale,{x:1.4,y:1.4,duration:1.2,yoyo:!0,repeat:1,ease:"sine.inOut"},"<"),this.timeline.to(this.seedLight,{intensity:3.6,duration:1.2,yoyo:!0,repeat:1,ease:"sine.inOut"},"<"),this.timeline.call(()=>{n&&n("Brotando con fuerza hacia la luz...")},null,"+=0.2"),this.timeline.to(this.stemGroup.scale,{x:1,y:1,z:1,duration:3.2,ease:"power2.out"}),this.timeline.to(t.position,{x:o,y:a+8,z:l+8.6,duration:3.8,ease:"power1.inOut"},"<"),this.timeline.to(c,{x:o,y:a+7.4,z:l,duration:3.8,ease:"power1.inOut",onUpdate:()=>e.target.copy(c)},"<"),this.timeline.to(this.leaf1.scale,{x:.9,y:.9,z:.9,duration:1.4,ease:"back.out(1.7)"},"-=2.4"),this.timeline.to(this.leaf2.scale,{x:1,y:1,z:1,duration:1.4,ease:"back.out(1.7)"},"-=1.6"),this.timeline.call(()=>{n&&n("Y el amor florece en tonos amarillos...")},null,"-=0.5"),this.timeline.to(this.flowerHead.scale,{x:1,y:1,z:1,duration:1.6,ease:"power2.out"},"-=0.8"),this.timeline.to([this.disc.scale,this.glowDisc.scale],{x:1,y:1,z:1,duration:1.8,ease:"elastic.out(1, 0.6)"},"-=0.6"),this.innerPetals.forEach((h,u)=>{this.timeline.to(h.petal.scale,{x:1,y:1,z:1,duration:1.2,ease:"back.out(1.5)"},`-=${1.1-u*.02}`),this.timeline.to(h.petal.rotation,{x:h.openAngle,duration:1.4,ease:"power2.out"},"<")}),this.petals.forEach((h,u)=>{this.timeline.to(h.petal.scale,{x:1,y:1,z:1,duration:1.3,ease:"back.out(1.4)"},`-=${1.15-u*.02}`),this.timeline.to(h.petal.rotation,{x:h.openAngle,duration:1.5,ease:"power2.out"},"<")}),this.timeline.to(this.flowerLight,{intensity:2.2,duration:1.2,ease:"power1.in"},"-=1.0"),this.timeline.call(()=>{n&&n("Bienvenido al Universo de Flores Amarillas ✨"),i&&i()},null,"+=0.2"),this.timeline.to(t.position,{x:0,y:32,z:75,duration:3.2,ease:"power3.inOut"},"+=0.2"),this.timeline.to(c,{x:0,y:0,z:0,duration:3.5,ease:"power3.inOut",onUpdate:()=>e.target.copy(c)},"<")}skipAnimation(t,e,n){this.timeline&&this.timeline.kill(),this.isBlooming=!1,e.enabled=!0,this.stemGroup.scale.set(1,1,1),this.leaf1.scale.set(.9,.9,.9),this.leaf2.scale.set(1,1,1),this.flowerHead.scale.set(1,1,1),this.disc.scale.set(1,1,1),this.glowDisc.scale.set(1,1,1),this.flowerLight.intensity=1.8,this.innerPetals.forEach(i=>{i.petal.scale.set(1,1,1),i.petal.rotation.x=i.openAngle}),this.petals.forEach(i=>{i.petal.scale.set(1,1,1),i.petal.rotation.x=i.openAngle}),t.position.set(0,32,75),e.target.set(0,0,0),n&&n()}update(t){this.isBlooming||(this.flowerHead.rotation.z=Math.sin(t*.8)*.04,this.flowerHead.rotation.x=-.3+Math.cos(t*.6)*.03)}}window.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("webgl"),t=new ay(r),e=ly(t.scene,2200),n=cy(t.scene,150),i=new Ey(t.scene);i.group.position.set(0,-3.5,2.5);const s=_y(t.scene),o=yy(t.scene),a=new Ln(3.6,12,12),l=new gi({visible:!1}),c=new Wt(a,l);i.flowerHead.add(c);const h={id:"hero-blooming-flower",title:"Girasol de la Vida 🌻💛",date:"21 de Septiembre — Florecido para ti",type:"flower",body:"Este girasol nació de una pequeña semilla dorada en este rincón del universo. Es el símbolo de que el amor, el cariño y las promesas más sinceras siempre encuentran la forma de crecer, elevarse y florecer hacia la luz.",author:"Sembrado con amor eterno ✨",mesh:c,group:i.flowerHead,targetPosition:new I(0,4,2.5),cameraOffset:new I(0,4,12)};c.userData=h;const u=[h,...s.flowers,...o.letters];t.interactiveObjects=u,J(s.flowers.length+1,o.letters.length);let f=0;function d(nt){He.playChime(),document.getElementById("modal-date").textContent=nt.date||"21 de Septiembre",document.getElementById("modal-title").textContent=nt.title,document.getElementById("modal-body").textContent=nt.body,document.getElementById("modal-author").textContent=`— ${nt.author||"Con amor"}`,g(),document.getElementById("message-modal").classList.remove("hidden"),f=t.interactiveObjects.findIndex(X=>X.id===nt.id)}t.onSelectObject=nt=>{t.stopTour(),t.flyToObject(nt,()=>{d(nt)})};function g(){ya({particleCount:50,spread:70,origin:{y:.6},colors:["#FACC15","#FEF08A","#EAB308","#CA8A04","#FFFFFF"],shapes:["circle"],scalar:1.2})}const _=document.getElementById("message-modal"),m=document.getElementById("btn-close-modal"),p=document.getElementById("btn-modal-confetti"),S=document.getElementById("btn-next-item");function x(){_.classList.add("hidden")}m.addEventListener("click",x),_.addEventListener("click",nt=>{nt.target===_&&x()}),p.addEventListener("click",()=>{He.playChime(),g(),ya({particleCount:35,angle:60,spread:55,origin:{x:0},colors:["#FACC15","#FEF08A","#F59E0B"]}),ya({particleCount:35,angle:120,spread:55,origin:{x:1},colors:["#FACC15","#FEF08A","#F59E0B"]})}),S.addEventListener("click",()=>{x(),f=(f+1)%t.interactiveObjects.length;const nt=t.interactiveObjects[f];t.flyToObject(nt,()=>{d(nt)})});const v=document.getElementById("create-modal"),P=document.getElementById("btn-new-letter"),R=document.getElementById("btn-close-create"),b=document.getElementById("btn-cancel-create"),A=document.getElementById("form-create-letter");function M(){v.classList.remove("hidden")}function y(){v.classList.add("hidden")}P.addEventListener("click",M),R.addEventListener("click",y),b.addEventListener("click",y),v.addEventListener("click",nt=>{nt.target===v&&y()}),A.addEventListener("submit",nt=>{nt.preventDefault();const Tt=document.getElementById("input-recipient").value.trim(),X=document.getElementById("input-title").value.trim(),et=document.getElementById("input-message").value.trim(),C=document.getElementById("input-sender").value.trim();if(!Tt||!X||!et)return;const gt=o.addCustomLetter({recipient:Tt,title:X,message:et,sender:C||"Anónimo con amor"});t.interactiveObjects.push(gt),J(s.flowers.length,o.letters.length),y(),A.reset(),He.playChime(),g(),setTimeout(()=>{t.flyToObject(gt,()=>{d(gt)})},400)});const L=document.getElementById("btn-audio"),z=document.getElementById("audio-waves");L.addEventListener("click",()=>{He.toggle()?(L.classList.add("playing"),z.style.opacity="1"):(L.classList.remove("playing"),z.style.opacity="0.4")});const N=document.getElementById("btn-tour");N.addEventListener("click",()=>{t.tourActive?(t.stopTour(),N.classList.remove("highlight"),N.querySelector(".btn-text").textContent="Paseo Guiado"):(x(),N.classList.add("highlight"),N.querySelector(".btn-text").textContent="Detener Paseo",He.init(),He.isPlaying||(He.play(),L.classList.add("playing")),t.startTour(nt=>{d(nt)}))}),document.getElementById("btn-reset-cam").addEventListener("click",()=>{x(),t.resetCamera()});function q(nt){s.grandBouquet&&(s.grandBouquet.visible=nt),s.flowers.forEach(X=>{X.group&&(X.group.visible=nt)}),o.letters.forEach(X=>{X.group&&(X.group.visible=nt)}),document.querySelectorAll(".hud-element").forEach(X=>{nt?X.classList.remove("hidden-hud"):X.classList.add("hidden-hud")})}const H=document.getElementById("clean-bloom-screen"),K=document.getElementById("bloom-caption"),V=document.getElementById("btn-start-bloom"),ft=document.getElementById("btn-skip-intro"),U=document.getElementById("btn-replay-bloom"),D=document.getElementById("iris-wipe"),it=document.getElementById("iris-ring"),pt=document.getElementById("iris-flash");q(!1),i.resetToSeedState(t.camera,t.controls);function k(){if(!D||!it){q(!0),H&&H.classList.add("hidden");return}const nt=document.getElementById("iris-curtain");D.classList.remove("hidden"),He.playChime(),g(),nt&&(nt.style.opacity="1",nt.style.setProperty("--iris-radius","0%")),q(!0),H&&H.classList.add("hidden");const Tt={radius:0};Ge.to(Tt,{radius:130,duration:2.6,ease:"power2.inOut",onUpdate:()=>{nt&&nt.style.setProperty("--iris-radius",`${Tt.radius}%`)},onComplete:()=>{nt&&(nt.style.opacity="0"),D.classList.add("hidden"),V&&(V.style.display="",V.style.opacity="1")}}),Ge.fromTo(it,{scale:0,opacity:1},{scale:230,opacity:0,duration:2.6,ease:"power2.inOut"}),pt&&Ge.fromTo(pt,{opacity:0,scale:.5},{opacity:.75,scale:1.4,duration:.55,yoyo:!0,repeat:1,ease:"sine.inOut"})}function j(){x(),t.stopTour(),H&&H.classList.remove("hidden"),V&&Ge.to(V,{opacity:0,scale:.8,duration:.4,onComplete:()=>{V.style.display="none"}}),He.init(),He.isPlaying||(He.play(),L.classList.add("playing"),z.style.opacity="1"),i.playGrowthAnimation({camera:t.camera,controls:t.controls,onProgressText:nt=>{K&&Ge.to(K,{opacity:0,duration:.25,onComplete:()=>{K.textContent=nt,Ge.to(K,{opacity:1,duration:.45})}})},onOpenSceneCircle:()=>{k()},onComplete:()=>{q(!0)}})}function at(){H&&H.classList.add("hidden"),He.init(),He.isPlaying||(He.play(),L.classList.add("playing"),z.style.opacity="1"),i.skipAnimation(t.camera,t.controls,()=>{q(!0)})}V&&V.addEventListener("click",j),ft&&ft.addEventListener("click",at),U&&U.addEventListener("click",()=>{q(!1),V&&(V.style.display="",V.style.opacity="1"),K&&(K.textContent="En la inmensidad del espacio, late una pequeña semilla..."),j()});function J(nt,Tt){const X=document.getElementById("flower-count"),et=document.getElementById("letter-count");X&&(X.textContent=nt),et&&(et.textContent=Tt)}let lt=0;function yt(){requestAnimationFrame(yt),lt+=.016,e.update(lt),n.update(),s.update(),o.update(),i.update(lt),t.render()}yt()});
