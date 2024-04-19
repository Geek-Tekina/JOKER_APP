import { Image } from "../models/imageSchema.js";
import cloudinary from "cloudinary";

//json data for getImages API
const imageData = [
  {
    _id: "661d4cb027fc8c33c026d95f",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196207/nlgxwbhiw58tctft7uc1.jpg',
    n_id: 1
  },
  {
    _id: "661d4ce627fc8c33c026d962",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196260/ozpu36qwbk8mk92qidtl.jpg',
    n_id: 2
  },
  {
    _id: "661d4d4f27fc8c33c026d965",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196366/x4mwnoylr6chwqvlndmk.jpg',
    n_id: 3
  },
  {
    _id: "661d4d7927fc8c33c026d968",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196407/cbkg294b92tnesgr81pm.jpg',
    n_id: 4
  },
  {
    _id: "661d4d9827fc8c33c026d96b",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196439/ydpn0qnks3fqvehhyead.jpg',
    n_id: 5
  },
  {
    _id: "661d4dea27fc8c33c026d96e",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196519/odpo2vuqll2qwl09yrsn.jpg',
    n_id: 6
  },
  {
    _id: "661d4e5027fc8c33c026d971",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196623/wyppnrgwnjn4pxtp4beq.jpg',
    n_id: 7
  },
  {
    _id: "661d4e9e27fc8c33c026d974",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196700/o953uvkrrernoxhl6k2x.jpg',
    n_id: 8
  },
  {
    _id: "661d4ed427fc8c33c026d977",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196754/car62rrmofdpeqs2qwum.jpg',
    n_id: 9
  },
  {
    _id: "661d4f64d0b5d80b08de6d73",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196899/r1sdoyelakvvf3folcuf.jpg',
    n_id: 10
  },
  
  {
    _id: "661fed992dbea38f81526ec1",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368469/rjipa2y93kq85ffyuut4.jpg',
    n_id: 11
  },
  {
    _id: "661fedbb2dbea38f81526ec4",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368503/gemzq9d6c743wzrnwl1c.jpg',
    n_id: 12
  },
  {
    _id: "661fedf22dbea38f81526ec7",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368558/c0ebzumfwknlsh3nw3jq.jpg',
    n_id: 13
  },
  {
    _id: "661fee1f2dbea38f81526eca",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368603/hovbq7df6e7hmppu87ls.jpg',
    n_id: 14
  },
  {
    _id: "661feeb02dbea38f81526ecd",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368748/g1cphrg7rmbq2h6h11bs.jpg',
    n_id: 15
  },
  {
    _id: "661feec92dbea38f81526ed0",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368773/zzbozhuhmsskvfhuhv6a.jpg',
    n_id: 16
  },
  {
    _id: "661feedb2dbea38f81526ed3",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368791/fnnrzgg5kknqff4qyqqm.jpg',
    n_id: 17
  },
  {
    _id: "661feeec2dbea38f81526ed6",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368808/gxxioqmrpse2fi4xnqtv.jpg',
    n_id: 18
  },
  {
    _id: "661fef042dbea38f81526ed9",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368831/klpxibx7rleseuktbums.jpg',
    n_id: 19
  },
  {
    _id: "661fef212dbea38f81526edc",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368861/i8w63qk9btovr4meouis.jpg',
    n_id: 20
  },
  {
    _id: "661ff0802dbea38f81526edf",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369212/sig5qfohx6htzvleyubl.jpg',
    n_id: 21
  },
  {
    _id: "661ff0b02dbea38f81526ee2",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369260/upe8fyw4jv21kmimkpde.jpg',
    n_id: 22
  },
  {
    _id: "661ff1082dbea38f81526ee8",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369348/cysivbnhvvge5d1ouabb.jpg',
    n_id: 24
  },
  {
    _id: "661ff1242dbea38f81526eeb",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369377/zsgkkof0yaecuufeaymi.jpg',
    n_id: 25
  },
  {
    _id: "661ff14d2dbea38f81526eee",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369417/ffzsrtyberaz7wbvndis.jpg',
    n_id: 26
  },
  {
    _id: "661ff1772dbea38f81526ef1",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369460/j2wtz6kx0ldacrzxwypw.jpg',
    n_id: 27
  },
  {
    _id: "661ff1a62dbea38f81526ef4",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369506/j3bcuwficztbghfleomi.jpg',
    n_id: 28
  },
  {
    _id: "661ff1dd2dbea38f81526ef7",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369561/bx1b5rudq0vjrvtt3re8.jpg',
    n_id: 29
  },
  {
    _id: "661ff23f10cd033c463d305b",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369659/n3d5hrodkp3na4prb5st.jpg',
    n_id: 30
  },
  {
    _id: "661ff27210cd033c463d305e",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369711/xaw9hw03sj5edlgoerhq.jpg',
    n_id: 31
  },
  {
    _id: "661ff29310cd033c463d3061",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369743/lpaczgjdyah6iokwskeu.jpg',
    n_id: 32
  },
  {
    _id: "661ff2b410cd033c463d3064",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369776/sypywe5mzepa4hplynj2.jpg',
    n_id: 33
  },
  {
    _id: "661ff2e010cd033c463d3067",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369820/wym0y7t5n3luolpmrfxk.jpg',
    n_id: 34
  },
  {
    _id: "661ff2fc10cd033c463d306a",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369848/nqcnmmxh8b9gjxdacbke.jpg',
    n_id: 35
  },
  {
    _id: "661ff31510cd033c463d306d",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369873/v3qxkahd1d22ixzzodax.jpg',
    n_id: 36
  },
  {
    _id: "661ff32d10cd033c463d3070",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369897/yxtahi21asebtpm9aeys.jpg',
    n_id: 37
  },
  {
    _id: "661ff34510cd033c463d3073",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369921/qxgsbthkecz0j5vxq8zj.jpg',
    n_id: 38
  },
  {
    _id: "661ff35a10cd033c463d3076",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369942/lkcavne0tvlxtphfypsj.jpg',
    n_id: 39
  },
  {
    _id: "661ff36c10cd033c463d3079",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369960/jo0jp6niit07aom0xxis.jpg',
    n_id: 40
  },
  
{
  _id: "661ff38510cd033c463d307c",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369985/rm23cpxy7nlivthjvd7t.jpg',
  n_id: 41
},
{
  _id: "661ff3af10cd033c463d307f",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370027/qejktu4l57rv5euateta.jpg',
  n_id: 42
},
{
  _id: "661ff3c910cd033c463d3082",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370053/jimbpgf8o56hduqxy6ah.jpg',
  n_id: 43
},
{
  _id: "661ff3dd10cd033c463d3085",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370073/z11gp13vdjbx3wzet0gx.jpg',
  n_id: 44
},
{
  _id: "661ff3fc10cd033c463d3088",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370104/fqzcpvfsvttcf01ruxby.jpg',
  n_id: 45
},
{
  _id: "661ff41710cd033c463d308b",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370131/v8liqcd8arjdqlyyo9zh.jpg',
  n_id: 46
},
{
  _id: "661ff45f10cd033c463d3091",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370203/wqhfrskgwdkxcsz9osiv.jpg',
  n_id: 47
},
{
  _id: "661ff48110cd033c463d3094",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370237/k2vff2cilpw1gqynbuwt.jpg',
  n_id: 48
},
{
  _id: "661ff49510cd033c463d3097",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370257/mwr02g4fqni8xdb2gcqo.jpg',
  n_id: 49
},
{
  _id: "661ff4ad10cd033c463d309a",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370281/yk622hihy2ipxfghu2nz.jpg',
  n_id: 50
},
{
  _id: "662126db40715bc68b2295a5",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448666/lppeeb8jkvzdmz4yaoip.jpg',
  n_id: 51
},
{
  _id: "662126fa40715bc68b2295a8",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448696/eiqt6vc6bhorqztr71rg.jpg',
  n_id: 52
},
{
  _id: "6621272f40715bc68b2295ab",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448748/h1bjdxmpykj6ixqwqky8.jpg',
  n_id: 53
},
{
  _id: "6621275f40715bc68b2295ae",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448797/hil9ilrwg3ivu2hjzblj.jpg',
  n_id: 54
},
{
  _id: "6621278c40715bc68b2295b1",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448842/gjjidmawzxlooxv89h9t.jpg',
  n_id: 55
},
{
  _id: "662127a440715bc68b2295b4",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448867/dtfwqxtu0x5yykxew7qy.jpg',
  n_id: 56
},
{
  _id: "662127bc40715bc68b2295b7",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448891/fk2ltrleqao0c8vecu9d.jpg',
  n_id: 57
},
{
  _id: "662127c840715bc68b2295ba",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448902/c7qmno7yeg0kugvlw0et.jpg',
  n_id: 58
},
{
  _id: "662127d040715bc68b2295bd",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448910/rjm0caiqgm6aeeib319c.jpg',
  n_id: 59
},
{
  _id: "662127db40715bc68b2295c0",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448922/ukut611nk9q7mbkjpeg7.jpg',
  n_id: 60
},
{
  _id: "662127f340715bc68b2295c3",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448946/jq2jddhsbghrokyjzbq8.jpg',
  n_id: 61
},
{
  _id: "6621281540715bc68b2295c6",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713448979/oon5uprzflepvaiyjx31.jpg',
  n_id: 62
},
{
  _id: "6621282d40715bc68b2295c9",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713449004/tokykou2akgyu6mbqvlg.jpg',
  n_id: 63
},
{
  _id: "6621284740715bc68b2295cc",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713449030/vx8cf8kjvwcnwlyewwms.jpg',
  n_id: 64
},
{
  _id: "6621285740715bc68b2295cf",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713449046/e8lejbxrhelfuelhlzep.jpg',
  n_id: 65
},
{
  _id: "6621286740715bc68b2295d2",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713449062/typx3hwe9zc0jaktzjfc.jpg',
  n_id: 66
},
{
  _id: "6621287a40715bc68b2295d5",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713449080/fp7nkhploujsxdzja3ew.jpg',
  n_id: 67
},
{
  _id: "6621288d40715bc68b2295d8",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713449099/se2uiwovahjpwt2bannk.jpg',
  n_id: 68
},
{
  _id: "662128a440715bc68b2295db",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713449122/pbeeammrxfphg50o6qvq.jpg',
  n_id: 69
},
{
  _id: "662128be40715bc68b2295de",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713449149/un8uy8rg4cs7xikxylpz.jpg',
  n_id: 70
},
{
  _id: "662128d240715bc68b2295e1",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713449169/nlv9dmoxrfhh6de1cggn.jpg',
  n_id: 71
},
{
  _id: "6621432340715bc68b2295e4",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713455905/bxpyt4kscelpfnpgoyng.jpg',
  n_id: 72
},
{
  _id: "662143d840715bc68b2295e7",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456087/xgmq5bidcvcgykzm5sxa.jpg',
  n_id: 73
},
{
  _id: "662143e440715bc68b2295ea",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456099/ysa4aexkihnexwtdqcd0.jpg',
  n_id: 74
},
{
  _id: "662143f840715bc68b2295ed",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456118/yzbfzplevkxp1jwg283p.jpg',
  n_id: 75
},
{
  _id: "6621440540715bc68b2295f0",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456131/ftl8qsbtetztnohjmgyj.jpg',
  n_id: 76
},
{
  _id: "6621441440715bc68b2295f3",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456147/h82lfoy4itmpor61h0fi.jpg',
  n_id: 77
},
{
  _id: "6621442240715bc68b2295f6",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456160/q6ad4jsokynjtwku3yul.jpg',
  n_id: 78
},
{
  _id: "6621442e40715bc68b2295f9",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456173/llamjhchqlltgbzxr07a.jpg',
  n_id: 79
},
{
  _id: "6621443a40715bc68b2295fc",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456185/xm49mczgcs54a50zq6gv.jpg',
  n_id: 80
}
,
{
  _id: "6621444940715bc68b2295ff",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456199/vhginf3e4gwm02zfuqqv.jpg',
  n_id: 81
},
{
  _id: "6621445f40715bc68b229602",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456222/ipn16wgo39xnvet8qpmu.jpg',
  n_id: 82
},
{
  _id: "6621446d40715bc68b229605",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456236/bnzcuxox9e3ppq4nhbpv.jpg',
  n_id: 83
},
{
  _id: "6621447c40715bc68b229608",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456251/gm51mrtkdzoearg971ag.jpg',
  n_id: 84
},
{
  _id: "662144aa40715bc68b22960b",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456297/lgi1ebkgyfsqe8jltjih.jpg',
  n_id: 85
},
{
  _id: "662144ca40715bc68b22960e",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456328/m4xmvdzt6klftackfg5z.jpg',
  n_id: 86
},
{
  _id: "662144dc40715bc68b229611",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456346/ghwv9y2erbx7eixhbsgs.jpg',
  n_id: 87
},
{
  _id: "662144e940715bc68b229614",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456359/ejifzcshkprqxbdviumn.jpg',
  n_id: 88
},
{
  _id: "662144f740715bc68b229617",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456373/jy8jbbwmsyo5j1jmn22s.jpg',
  n_id: 89
},
{
  _id: "6621450740715bc68b22961a",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456389/ikxyspxwzgp6cnd963fz.jpg',
  n_id: 90
},
{
  _id: "6621451640715bc68b22961d",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456405/fifstanonmrffajlkobu.jpg',
  n_id: 91
},
{
  _id: "6621452340715bc68b229620",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456418/hpmill2i0ak9ufp8kd2n.jpg',
  n_id: 92
},
{
  _id: "6621453340715bc68b229623",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456433/yuvrkycjtologmqranpc.jpg',
  n_id: 93
},
{
  _id: "6621454140715bc68b229626",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456447/uanzsfibplmm0fexohaf.jpg',
  n_id: 94
},
{
  _id: "6621454e40715bc68b229629",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456461/wdhgszzihqamdodzceqo.jpg',
  n_id: 95
},
{
  _id: "6621455b40715bc68b22962c",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456473/yywqjqzkjmu1kn3fzyqx.jpg',
  n_id: 96
},
{
  _id: "6621456740715bc68b22962f",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456485/zw20wn4sdhjziirdfvuj.jpg',
  n_id: 97
},
{
  _id: "6621457640715bc68b229632",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456500/ncdp1v1uu1uucjsaenz1.jpg',
  n_id: 98
},
{
  _id: "6621458240715bc68b229635",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456513/d05jy95rzh5zrmvgj1wd.jpg',
  n_id: 99
},
{
  _id: "6621458e40715bc68b229638",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713456525/gpoo1wyeu4vraz9sck5k.jpg',
  n_id: 100
},
 {
    _id: "6622935c2f49c33e3c15ed48",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713541979/ztpvuusrzy0atxg5jiim.jpg',
    n_id: 101
  },
  {
    _id: "662293782f49c33e3c15ed4b",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542007/p9eaabfw4rjpurxg4qrh.jpg',
    n_id: 102
  },
  {
    _id: "6622938e2f49c33e3c15ed4e",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542029/uidmjf3egcjslm6jyrv0.jpg',
    n_id: 103
  },
  {
    _id: "662293a12f49c33e3c15ed51",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542048/evjrhtza1uirkkg03zfd.jpg',
    n_id: 104
  },
  {
    _id: "662293b02f49c33e3c15ed54",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542062/bxemxbykysnc9ufyif3o.jpg',
    n_id: 105
  },
  {
    _id: "662293c02f49c33e3c15ed57",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542080/siy5g41xynwoymf9xp8z.jpg',
    n_id: 106
  },
  {
    _id: "662293d52f49c33e3c15ed5a",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542100/khbabap9ooaiwnfpafwl.jpg',
    n_id: 107
  },
  {
    _id: "662293e22f49c33e3c15ed5d",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542113/jbbbp9y73xscizgtlr4a.jpg',
    n_id: 108
  },
  {
    _id: "662293ef2f49c33e3c15ed60",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542126/kpt0vecmovzphiduskdt.jpg',
    n_id: 109
  },
  {
    _id: "662293fb2f49c33e3c15ed63",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542138/lg3xrsoh6qajijte902e.jpg',
    n_id: 110
  },
  {
    _id: "662294092f49c33e3c15ed66",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542152/wq19c7op7qd04lsc2ytm.jpg',
    n_id: 111
  },
  {
    _id: "662294182f49c33e3c15ed69",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542167/csh61xy4kigte1ahsq3v.jpg',
    n_id: 112
  },
  {
    _id: "66229461b9633ee63a92e4ff",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542240/nneo3nkhi4q39dkrlwsx.jpg',
    n_id: 113
  },
  {
    _id: "66229478b9633ee63a92e502",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542263/tgktz4k8z2jjdcowut40.jpg',
    n_id: 114
  },
  {
    _id: "662294c2b9633ee63a92e505",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542337/ge6q0j2pyytwhwgdzppa.jpg',
    n_id: 115
  },
  {
    _id: "662295058accb3a37102536d",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542404/xnt3ayvsucyuzjajz8yj.jpg',
    n_id: 116
  },
  {
    _id: "662295188accb3a371025370",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542424/wgnpsog1gz7sp2qb2md1.jpg',
    n_id: 117
  },
  {
    _id: "662295278accb3a371025373",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542439/yzmw7syslh4w6n67mado.jpg',
    n_id: 118
  },
  {
    _id: "6622953c8accb3a371025376",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542459/p9zwkvilsiht2y8tp1m2.jpg',
    n_id: 119
  },
  {
    _id: "662295558accb3a371025379",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542484/wwm6rtvtuim9pdm4aqvq.jpg',
    n_id: 120
  },
  {
    _id: "662295628accb3a37102537c",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542498/wekbelot2jrtlbtgurng.jpg',
    n_id: 121
  },
  {
    _id: "662295788accb3a37102537f",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542519/mwu1uv32uvbynqwfmup0.jpg',
    n_id: 122
  },
  {
    _id: "662295848accb3a371025382",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542531/twu2cwfjqs4i32qpef9l.jpg',
    n_id: 123
  },
  {
    _id: "662296e48accb3a371025385",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542883/a4lvf29e7dyshmjib6hd.jpg',
    n_id: 124
  },
  {
    _id: "662296f78accb3a371025388",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542902/ojt2rlgi86djkhckrwki.jpg',
    n_id: 125
  },
  {
    _id: "662297078accb3a37102538b",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542918/aluuakp8jkpc8qo3lmbt.jpg',
    n_id: 126
  },
  {
    _id: "662297178accb3a37102538e",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542934/ye5tbzi1h7g3xeidjygq.jpg',
    n_id: 127
  },
  {
    _id: "662297298accb3a371025391",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542953/szqhkwdvaktz9dtugzwd.jpg',
    n_id: 128
  },
  {
    _id: "662297378accb3a371025394",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542966/et1idu6lamqo2kjeiyxc.jpg',
    n_id: 129
  },
  {
    _id: "6622973f8accb3a371025397",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713542974/zralr5yk08fshoa63ywv.jpg',
    n_id: 130
  },
  {
    _id: "6622975a8accb3a37102539a",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543001/weldcyvv1ifegyygp9ia.jpg',
    n_id: 131
  },
  {
    _id: "662297768accb3a37102539d",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543028/djyxflgbmlf9ce5vx5ye.jpg',
    n_id: 132
  },
  {
    _id: "662297888accb3a3710253a0",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543048/a0uxs149sbevdl9rvtny.jpg',
    n_id: 133
  },
  {
    _id: "6622979d8accb3a3710253a3",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543068/mdwznamayabbutgzempd.jpg',
    n_id: 134
  },
  {
    _id: "662297b68accb3a3710253a6",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543093/pznez4mtrfasf4skil3x.jpg',
    n_id: 135
  },
  {
    _id: "662297c78accb3a3710253a9",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543109/m26kq0hkaxdzgxsw9lxz.jpg',
    n_id: 136
  },
  {
    _id: "662297d78accb3a3710253ac",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543126/e0ls47eryp32opmdynmy.jpg',
    n_id: 137
  },
  {
    _id: "662297f38accb3a3710253af",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543155/urrmhqs8h1xxrswmm1ui.jpg',
    n_id: 138
  },
  {
    _id: "662298038accb3a3710253b2",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543170/tklkkkyixonfvpvoll1n.jpg',
    n_id: 139
  },
  {
    _id: "662298248accb3a3710253b5",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543203/hezf99umltgn6gcke2ic.jpg',
    n_id: 140
  },
  {
    _id: "6622983a8accb3a3710253b8",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543225/qclur26fk9wwa9tbdxaa.jpg',
    n_id: 141
  },
  {
    _id: "6622984b8accb3a3710253bb",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543242/hqcmtz9fziy6mugf2c1p.jpg',
    n_id: 142
  },
  {
    _id: "6622986a8accb3a3710253be",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543267/is4vrpsxvjinga4z6rcl.jpg',
    n_id: 143
  },
  {
    _id: "662298838accb3a3710253c1",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543298/u9pyarrcrrutkm51yf6z.jpg',
    n_id: 144
  },
  {
    _id: "662298a18accb3a3710253c4",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543328/zuf04esaayttus466i3w.jpg',
    n_id: 145
  },
  {
    _id: "662298b28accb3a3710253c7",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543346/riur2vie84ots8rnzg8d.jpg',
    n_id: 146
  },
  {
    _id: "662298c38accb3a3710253ca",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543362/apouhvihcufo0fy2otns.jpg',
    n_id: 147
  },
  {
    _id: "662298d48accb3a3710253cd",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543378/amma16ayk6kwlibpui9e.jpg',
    n_id: 148
  },
  {
    _id: "662298e48accb3a3710253d0",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543395/jo02kq213b5je4xu7ve2.jpg',
    n_id: 149
  },
  {
    _id: "662298f18accb3a3710253d3",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543408/hsqao7xdbkl5ycxssmbd.jpg',
    n_id: 150
  },
  {
    _id: "662299028accb3a3710253d6",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543425/poxlok0rqpb7ch3mzu0f.jpg',
    n_id: 151
  },
  {
    _id: "662299128accb3a3710253d9",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543441/uv80eg3lxahhn7bmzlei.jpg',
    n_id: 152
  },
  {
    _id: "662299218accb3a3710253dc",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543456/i3maz8rxiba0cyyp8sen.jpg',
    n_id: 153
  },
  {
    _id: "662299348accb3a3710253df",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713543475/atsg7ummypnvmdmaczrx.jpg',
    n_id: 154
  }
]
// controller for displaying all the images
export const getAllImages = async (req, res) => {
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 2;
  // Count total number of images
  const totalImages = await Image.countDocuments();

  // Calculate total pages
  const totalPages = Math.ceil(totalImages / limit);

  const imageList = await Image.find({})
    .select({ url: true, n_id: true })
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();
  res.json({
    success: true,
    status: 200,
    message: "Success",
    data: {
      imageList,
      totalImages: totalImages,
      totalPages: totalPages,
    },
  });
};

// controller for uploading Image
export const uploadImage = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.json({
      status: false,
      message: "Image Required",
    });
  }
  const { image } = req.files;

  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
  if (!allowedFormats.includes(image.mimetype)) {
    res.json({
      status: false,
      message: "File type must be in png/jpeg/webp formats",
    });
  }
  const cloudinaryResponse = await cloudinary.uploader.upload(
    image.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResponse.error || "Unknown Cloudinary error"
    );
    res.json({
      success: false,
      status: 500,
      message: "Failed to upload image in cloudinary !!",
    });
  }

  const newImage = await Image.create({
    public_id: cloudinaryResponse.public_id,
    url: cloudinaryResponse.secure_url,
  });
  const { n_id, url } = newImage;

  res.json({
    success: true,
    status: 200,
    message: "Image uploaded successfully",
    data: {n_id, url},
  });
};

//controller for image details
export const detail = async (req, res) => {
  const numeric_id = +req.query.n_id;
  // console.log(id);
  const imageDetail = await Image.findOne({ n_id: numeric_id }).exec();
  if (!imageDetail) {
    return res.json({
      success: false,
      status: 404,
      message: "Image Not found",
    });
  }
  const { n_id, url } = imageDetail;

  res.json({
    success: true,
    status: 200,
    message: "Image Details",
    data: { n_id, url },
  });
};

//controller for delete image
export const deleteImage = async (req, res) => {
  const numeric_id = +req.query.n_id;
  const img = await Image.findOne({ n_id: numeric_id }).exec();
  if (!img) {
    return res.json({
      success: false,
      status: 404,
      message: "Image Not found",
    });
  }
  await img.deleteOne();
  const { n_id, url } = img;

  res.json({
    success: true,
    status: 200,
    message: "Image deleted successfully",
    data: { n_id, url },
  });
};

export const test = async (req, res) =>{
  res.json({
    message : "hey I am alive now",
    secondMessage : "hey i have tested the change, and it is live now",
    thirdMessage :  "hey , this is the final test for this"
  })
}


export const getImages = async (req, res) => {
  try {
       
    const page = parseInt(req.query.page) || 1; 
    const pageSize = parseInt(req.query.pageSize) || 2; 
    const totalImages = imageData.length;
    const totalPages = Math.ceil(totalImages / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalImages);

    const paginatedData = imageData.slice(startIndex, endIndex);

    res.json({
      success: true,
      status: 200,
      message: "Success",
      data: {
        images: paginatedData,
        totalImages: totalImages,
        currentPage: page,
        totalPages: totalPages,
      },
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
};

