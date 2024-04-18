import{d as X,b as Y,e as Z,n as tt,u as et,o as nt}from"./vue.esm-bundler-KVnMFBLY.js";function G(e){var n,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=G(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function at(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=G(e))&&(a&&(a+=" "),a+=n);return a}const z=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,O=at,rt=(e,n)=>t=>{var a;if((n==null?void 0:n.variants)==null)return O(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:f,defaultVariants:i}=n,J=Object.keys(f).map(r=>{const s=t==null?void 0:t[r],c=i==null?void 0:i[r];if(s===null)return null;const o=z(s)||z(c);return f[r][o]}),S=t&&Object.entries(t).reduce((r,s)=>{let[c,o]=s;return o===void 0||(r[c]=o),r},{}),L=n==null||(a=n.compoundVariants)===null||a===void 0?void 0:a.reduce((r,s)=>{let{class:c,className:o,...Q}=s;return Object.entries(Q).every(R=>{let[_,b]=R;return Array.isArray(b)?b.includes({...i,...S}[_]):{...i,...S}[_]===b})?[...r,c,o]:r},[]);return O(e,J,L,t==null?void 0:t.class,t==null?void 0:t.className)},H=X({__name:"button",props:{variant:{default:"primary"},size:{default:"small"}},setup(e){const n=rt("button",{variants:{variant:{primary:"primary",secondary:"secondary",outline:"outline",destructive:"destructive"},size:{small:"small",medium:"medium"}},compoundVariants:[{variant:"primary",size:"medium"}]});return(t,a)=>(nt(),Y("button",{class:tt(et(n)({variant:t.variant,size:t.size}))},[Z(t.$slots,"default",{},void 0,!0)],2))}}),st=(e,n)=>{const t=e.__vccOpts||e;for(const[a,f]of n)t[a]=f;return t},g=st(H,[["__scopeId","data-v-f4ca79ce"]]);H.__docgenInfo={exportName:"default",displayName:"button",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'small'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/pnpm-workspace/pnpm-workspace/packages/ui/src/components/button/button.vue"]};const ot={component:g,argTypes:{variant:{control:"select",options:["primary","secondary","outline","destructive"]},size:{control:"select",options:["small","medium"]}}},ut='<v-button v-bind="args">Button</v-button>',u={render:e=>({components:{VButton:g},setup(){return{args:e}},template:ut})},l={name:"All",render:e=>({components:{VButton:g},setup(){return{args:e}},template:`
      <div style="display: flex; gap: 8px;">
        <v-button variant="primary">Button</v-button>
        <v-button variant="secondary">Button</v-button>
        <v-button variant="outline">Button</v-button>
        <v-button variant="destructive">Button</v-button>
      </div>
    `})},m={...u,name:"Small",args:{size:"small"}},d={...u,name:"Medium",args:{size:"medium"}},v={...u,name:"Primary",args:{variant:"primary"}},p={...u,name:"Secondary",args:{variant:"secondary"}},y={...u,name:"Outline",args:{variant:"outline"}},B={...u,name:"Destructive",args:{variant:"destructive"}};var V,k,x;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'All',
  render: args => ({
    components: {
      VButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 8px;">
        <v-button variant="primary">Button</v-button>
        <v-button variant="secondary">Button</v-button>
        <v-button variant="outline">Button</v-button>
        <v-button variant="destructive">Button</v-button>
      </div>
    \`
  })
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var A,N,T;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...BaseButton,
  name: 'Small',
  args: {
    size: 'small'
  }
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var C,P,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...BaseButton,
  name: 'Medium',
  args: {
    size: 'medium'
  }
}`,...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var h,M,D;v.parameters={...v.parameters,docs:{...(h=v.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...BaseButton,
  name: 'Primary',
  args: {
    variant: 'primary'
  }
}`,...(D=(M=v.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var I,w,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BaseButton,
  name: 'Secondary',
  args: {
    variant: 'secondary'
  }
}`,...(q=(w=p.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var E,F,K;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...BaseButton,
  name: 'Outline',
  args: {
    variant: 'outline'
  }
}`,...(K=(F=y.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,W,$;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...BaseButton,
  name: 'Destructive',
  args: {
    variant: 'destructive'
  }
}`,...($=(W=B.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const it=["Buttons","SmallButton","ButtonMedium","PrimaryButton","SecondaryButton","OutlineButton","DestructiveButton"],lt=Object.freeze(Object.defineProperty({__proto__:null,ButtonMedium:d,Buttons:l,DestructiveButton:B,OutlineButton:y,PrimaryButton:v,SecondaryButton:p,SmallButton:m,__namedExportsOrder:it,default:ot},Symbol.toStringTag,{value:"Module"}));export{lt as B};
