
          window.__NEXT_REGISTER_PAGE('/generatechallan', function() {
            var comp = module.exports=webpackJsonp([5],{272:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(12),d=a(n),u=l(9),r=a(u),c=l(10),m=a(c),f=l(14),i=a(f),s=l(13),o=a(s),E=l(6),p=a(E),x=l(52),h=a(x),g=l(621),y=a(g),b=l(64),v=a(b),N=function(e){function t(e){(0,r.default)(this,t);var l=(0,i.default)(this,(t.__proto__||(0,d.default)(t)).call(this,e));return l.state={data:[]},l.getChallanData=l.getChallanData.bind(l),l.renderChallanData=l.renderChallanData.bind(l),l}return(0,o.default)(t,e),(0,m.default)(t,[{key:"getChallanData",value:function(){var e=this;v.default.get("/Send_ChallanData?rollNo="+this.props.url.query.rollNo).then(function(t){e.setState({data:t.data}),console.log(e.props.url.query.rollNo)})}},{key:"renderChallanData",value:function(){return this.state.data.map(function(e){return p.default.createElement("main",{style:{marginTop:"5em"}},p.default.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4"},p.default.createElement("div",{className:"col-xs-12"},p.default.createElement("div",{className:"col-xs-3"},p.default.createElement("img",{src:"static/assets/img/iiuilogo.png",style:y.default.image})),p.default.createElement("div",{className:"col-xs-6",style:y.default.nopadding},p.default.createElement("p",{style:y.default.toCenter}," ",p.default.createElement("b",null,"Bank Alfalah limited "),p.default.createElement("br",null),"Islamic Banking ",p.default.createElement("br",null),"Latifabad Branch: Block C, ",p.default.createElement("br",null)," Civic Center Unit No. 7 ",p.default.createElement("br",null),p.default.createElement("span",{style:y.default.span2},"A/c no 5631-5000622021"))),p.default.createElement("div",{className:"col-xs-3",style:y.default.font,id:"tocenter"},p.default.createElement("p",null,"Bank Copy"))),p.default.createElement("div",{className:"col-xs-12"},p.default.createElement("p",{style:y.default.toCenter},p.default.createElement("span",{style:y.default.span1},"International Islamic University Islamabad Schools"),p.default.createElement("br",null),"Latifabad Campus")),p.default.createElement("div",{key:e._id},p.default.createElement("div",{key:e._id+"col-xs-12",className:"col-xs-12"},p.default.createElement("table",null,p.default.createElement("tbody",null,p.default.createElement("tr",null,p.default.createElement("td",{style:{width:"140px"}},"Issue Date"),p.default.createElement("td",{key:"Issue"+e._id},e.issueDate)),p.default.createElement("tr",null,p.default.createElement("td",null,"Fee for Month Of"),p.default.createElement("td",{key:"FeeMonth"+e._id},e.feeMonth)),p.default.createElement("tr",null,p.default.createElement("td",null,"DueDate *"),p.default.createElement("td",{key:"Duedate"+e._id},e.dueDate))))),p.default.createElement("div",{className:"col-xs-12"},p.default.createElement("table",null,p.default.createElement("tbody",null,p.default.createElement("tr",null,p.default.createElement("td",{style:{width:"140px"}},"Name"),p.default.createElement("td",{key:"fstname"+e._id},e.fname)),p.default.createElement("tr",null,p.default.createElement("td",null,"Father Name"),p.default.createElement("td",{key:"guard"+e._id},e.guardian))))),p.default.createElement("div",{className:"col-xs-12"},p.default.createElement("table",null,p.default.createElement("tbody",null,p.default.createElement("tr",{style:{height:"20px"}},p.default.createElement("td",{style:{width:"140px"}},"Grade"),p.default.createElement("td",{key:"grd"+e._id},e.grade)),p.default.createElement("tr",null,p.default.createElement("td",null,"Roll #"),p.default.createElement("td",{style:{width:"40px"},key:"roll"+e._id},e.rollNo)))),p.default.createElement("div",{className:"col-xs-12",style:{marginTop:"3px"}},p.default.createElement("p",{style:{textAlign:"center"}},"Challan details")),p.default.createElement("table",null,p.default.createElement("tbody",null,p.default.createElement("tr",{style:{height:"10px"}},p.default.createElement("td",{style:{width:"300px"}},"Description"),p.default.createElement("td",null,"Amount")),p.default.createElement("tr",{style:{borderTop:"thin double #000000"}},p.default.createElement("td",null,"Admission Fee"),p.default.createElement("td",null,"0")),p.default.createElement("tr",null,p.default.createElement("td",null,"Annual Fee"),p.default.createElement("td",null,"0")),p.default.createElement("tr",null,p.default.createElement("td",null,"Course"),p.default.createElement("td",null,"0")),p.default.createElement("tr",null,p.default.createElement("td",null,"Tution Fee"),p.default.createElement("td",null,"0")),p.default.createElement("tr",null,p.default.createElement("td",null,"Arreas"),p.default.createElement("td",null,"0")),p.default.createElement("tr",null,p.default.createElement("td",null,"Duplicate"),p.default.createElement("td",null,"0")),p.default.createElement("tr",null,p.default.createElement("td",null,"Challan"),p.default.createElement("td",null,"0")),p.default.createElement("tr",null,p.default.createElement("td",null,"Fee"),p.default.createElement("td",{key:"fee"+e._id},e.amount)),p.default.createElement("tr",null,p.default.createElement("td",null,"Reminder"),p.default.createElement("td",null,"0")),p.default.createElement("tr",null,p.default.createElement("td",null,"Photocopies"),p.default.createElement("td",null,"0")),p.default.createElement("tr",{style:{height:"20px"}},p.default.createElement("td",null,"Others"),p.default.createElement("td",null,"0")))))),p.default.createElement("div",{className:"col-xs-12",style:{borderTop:"thin double #000000"}},p.default.createElement("table",null,p.default.createElement("tbody",null,p.default.createElement("tr",{style:{height:"40px"}},p.default.createElement("td",{style:{width:"275px"}},"Totals"),p.default.createElement("td",null,"0"))))),p.default.createElement("div",{className:"col-xs-12"},p.default.createElement("div",{className:"col-xs-5",style:y.default.stampbox},p.default.createElement("p",{style:y.default.stamp},"Stamp")),p.default.createElement("div",{className:"col-xs-offset-1 col-xs-5",style:y.default.signatureBox},p.default.createElement("p",null,"Signature")))))})}},{key:"componentDidMount",value:function(){this.getChallanData()}},{key:"render",value:function(){return p.default.createElement("div",null,p.default.createElement(h.default,null),p.default.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},p.default.createElement("div",{className:"container"},p.default.createElement("div",{className:"row"},this.renderChallanData(),this.renderChallanData(),this.renderChallanData()))))}}]),t}(p.default.Component);t.default=N},621:function(e,t,l){"use strict";e.exports={stampbox:{height:"100px",border:"1px solid black"},stamp:{marginTop:"80px",textAlign:"center"},signatureBox:{marginTop:"80px",textAlign:"center",borderTop:"thin double #000000"},toCenter:{textAlign:"center",paddingTop:"10px",paddingLeft:"0px",marginLeft:"5px",fontSize:"13px"},image:{height:"80px",width:"80px",paddingTop:"10px",paddingLeft:"0px",marginLeft:"0px"},nopadding:{paddingLeft:"0px",paddingRight:"0px",marginLeft:"0px",marginRight:"0px"},font:{textAlign:"center",paddingTop:"10px",paddingLeft:"0px",paddingRight:"0px",marginLeft:"0px",marginRight:"0px",fontSize:"11px"},span1:{fontWeight:"bold",textDecoration:"underline"},span2:{borderStyle:"dotted"},borderRemove:{margin:"0px",border:"1px solid black"}}},676:function(e,t,l){e.exports=l(272)}},[676]);
            return { page: comp.default }
          })
        