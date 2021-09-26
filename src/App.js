import Nav from './Nav'
import Table from './Table';

const options = [
  { option: "admedia" },
  { option: "adprudence" },
  { option: "appnexus" },
  { option: "adventurefeeds" },
  { option: "atomx" },
  { option: "axonix" },
  { option: "c1x" },
  { option: "cappture" },
  { option: "citenko" },
  { option: "epomx" },
  { option: "fyber" },
  { option: "gotham" },
  { option: "google" },
  { option: "intango" },
  { option: "kadam" },
  { option: "medianexusnetwork" },
  { option: "nexage ", selected: true },
  { option: "pokkt" },
  { option: "privatex" },
  { option: "pubmatic" },
  { option: "republer" },
  { option: "smaato" },
  { option: "smaato-builtin" },
  { option: "smartyads" },
  { option: "smartadserver" },
  { option: "spotx" },
  { option: "ssphwy" },
  { option: "stroer" },
  { option: "taggify" },
  { option: "tappx" },
  { option: "vdopia" },
  { option: "vertamedia" },
  { option: "waardx" },
  { option: "wideorbit" },
]

function App() {

  var date = new Date();

  var bannerBid = {
    id: "35c22289-06e2-48e9-a0cd-94aeb79fab43",
    at: 2,
    imp: [
      {
        id: "35c22289-06e2-48e9-a0cd-94aeb79fab43-1",
        instl: 0,
        banner: {
          h: 50,
          w: 320,
          "mimes": [
            "image/gif",
            "image/jpeg",
            "image/png",
            "text/javascript"
          ],
          pos: 0
        },
        ext: {
          "nex_screen": 0
        }
      }
    ],
    site: {
      id: "99201",
      name: "BidderTestMobileWEB",
      domain: "junk1.com",
      cat: [
        "IAB1", "IAB2"
      ],
      keywords: "radiation",
      page: "http://www.nexage.com",
      ref: "http://www.iab.net",
      search: "radiation",
      publisher: {
        id: "98401",
        name: "testme"
      },
      ext: {
        "nex_coppa": 0
      }
    },
    device: {
      didsha1: "132079238ec783b0b89dff308e1f9bdd08576273",
      dpidsha1: "f22711a823044bb9ce7ace097955de0286eb0182",
      ip: "166.137.138.18",
      carrier: "ATT",
      ua: "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; el-gr) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5",
      make: "Apple",
      model: "iPhone",
      osv: "3.1.2",
      connectiontype: 3,
      devicetype: 1,
      geo: {
        lat: 42.378,
        lon: -71.227,
        country: "USA"
      }
    },
    user: {
      id: "ASDFJKL",
      yob: 1961,
      gender: "F",
      keywords: "sports",
      geo: {
        country: "USA",
        city: "Waltham",
        zip: "02451",
        region: "MA",
        type: 3
      },
      ext: {
        nex_eth: "4",
        nex_marital: "M",
        nex_kids: "N",
        nex_hhi: 75000,
        nex_dma: "Boston"
      }
    },
    ext: {
      coppa: 0,
      udi: {
        googleadid: "5e2efab6-7721-4cfe-b542-97084d5aa62f",
        googlednt: 0,
        atuid: "a90377ab-190b-1036-f424-ac10fdb8ffef"
      },
      operaminibrowser: 0,
      carriername: "Verizon Wireless"
    }
  };

  var videoBid = {
    id: "72c22289-06e2-48e9-a0cd-94aeb79fab43",
    at: 2,
    imp: [
      {
        id: "72c22289-06e2-48e9-a0cd-94aeb79fab43-1",
        instl: 0,
        video: {
          h: 200,
          w: 400,
          linearity: 1,
          minduration: 5,
          maxduration: 30,
          protocol: 2,
          mimes: [
            "video/x-flv",
            "video/mp4",
            "application/x-shockwave-flash",
            "application/javascript"
          ],
          pos: 0
        },
        ext: {
          "nex_screen": 0
        }
      }
    ],
    site: {
      id: "99201",
      name: "BidderTestMobileWEB",
      domain: "junk1.com",
      cat: [
        "IAB1", "IAB2"
      ],
      keywords: "radiation",
      page: "http://www.nexage.com",
      ref: "http://www.iab.net",
      search: "radiation",
      publisher: {
        id: "98401",
        name: "testme"
      },
      ext: {
        "nex_coppa": 0
      }
    },
    device: {
      didsha1: "132079238ec783b0b89dff308e1f9bdd08576273",
      dpidsha1: "f22711a823044bb9ce7ace097955de0286eb0182",
      ip: "166.137.138.18",
      carrier: "ATT",
      ua: "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; el-gr) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5",
      make: "Apple",
      model: "iPhone",
      osv: "3.1.2",
      connectiontype: 3,
      devicetype: 1,
      geo: {
        lat: 42.378,
        lon: -71.227,
        country: "USA"
      }
    },
    user: {
      id: "ASDFJKL",
      yob: 1961,
      gender: "F",
      keywords: "sports",
      geo: {
        country: "USA",
        city: "Waltham",
        zip: "02451",
        region: "MA",
        type: 3
      },
      ext: {
        nex_eth: "4",
        nex_marital: "M",
        nex_kids: "N",
        nex_hhi: 75000,
        nex_dma: "Boston"
      }
    }
  };

  /////////////////
  appWallImpression = {
    layout: 2,
    assets: [
      {
        id: 1,
        required: 1,
        title: {
          len: 30
        }
      },
      {
        id: 2,
        required: 0,
        data: {
          type: 3,
          len: 5
        }
      },
      {
        id: 3,
        required: 1,
        img: {
          type: 1,
          w: 64,
          h: 64,
          mimes: [
            "image/png"
          ]
        }
      },
      {
        id: 4,
        required: 0,
        data: {
          type: 2,
          len: 10
        }
      }
    ]
  };
  ///////////////////

  var bid = bannerBid;

  var tm = null;
  var times = 0;

  function doTimes() {
    var d = new Date();
    times++;
    if (times == 2) {
      return (d.getTime() - tm)
      times = 0;
    }
    else {
      tm = d.getTime();
      return 0;
    }
  }

  a = document.location.host      // localhost:1234
  b = document.location.hostname  // localhost
  c = document.location.port      // 1234




  function sendTest() {

    CRUD = nurl;
    document.getElementById("nurl").innerHTML = "";


    document.getElementById("image").innerHTML = "";
    document.getElementById("click-info").value = "";

    code = document.getElementById("code").value;
    bid = editor.get();
    data = JSON.stringify(bid, null, 2);
    document.getElementById("bid").innerHTML = data;
    document.getElementById("response").value = "";

    var exchange = document.getElementById('urlspec').value + document.getElementById('exchange_name').value;

    doTimes();

    $.ajax({
      type: 'POST',
      url: exchange,
      data: data,
      success: function (data, textStatus, request) {
        time = doTimes();

        if (request.status == 204) {
          text = "";
          xreason = "No Dib"
        } else {
          text = request.responseText;
          data = JSON.parse(text);
          text = JSON.stringify(data, null, 2);

          nurl = data.seatbid[0].bid[0].nurl;
          nurl = unescape(nurl);

          nurl = nurl.replace("${AUCTION_PRICE}", "5.0");
          nurl = nurl.replace("${AUCTION_PRICE}", "5.0");
          nurl = nurl.replace("${AUCTION_PRICE}", "5.0");


          vals = nurl.split("http:");
          imageUrl = "http:" + vals[vals.length - 1];
          parts = imageUrl.split("?"); url =

            nurl = encodeURI(nurl);

          CRUD = nurl;
          output = "<button type='button' class='btn btn-warning' onclick='loadImage()'>Send Win</button>&nbsp;" + nurl;

          document.getElementById("nurl").innerHTML = output;
          xreason = request.getResponseHeader('X-REASON');
        }
        xtime = request.getResponseHeader('X-TIME');
        xinstance = request.getResponseHeader('X-INSTANCE');
        report = "<h3>X-TIME: " + xtime + ", RTT: " + time;
        if (xreason != null) {
          report += ", *** NO BID *** REASON: " + xreason + "</h3>";
        }
        report += "</h3>";
        document.getElementById("analyze").innerHTML = report;
        document.getElementById("response").value = text;

        inst = "<h3>X-INSTANCE: " + xinstance + "</h3>";
        document.getElementById("xinstance").innerHTML = inst;


      },
      error: function (request, textStatus, errorThrown) {
        doModal(BootstrapDialog.TYPE_DANGER, "Error", request.responseText);
      }
    });

  }



  function loadImage() {
    if (CRUD == null) {
      doModal(BootstrapDialog.TYPE_DANGER, "Error", "There was no bid from Rew btr bidder");
      return;
    }
    var nurl = CRUD;
    nurl = nurl.replace("{AUCTION_PRICE}", "5.0");
    nurl = nurl.replace("{AUCTION_PRICE}", "5.0");
    nurl = nurl.replace("{AUCTION_PRICE}", "5.0");


    $.ajax({
      type: 'POST',
      url: nurl,
      data: "",
      success: function (data, textStatus, request) {
        text = request.responseText;

        if (text.length < 10) {
          doModal(BootstrapDialog.TYPE_DANGER, "Error", "Win retrieval returns no creative.\nWas the win already served?");
          return;
        }

        text = text.replace('${AUCTION_PRICE}', '5.0');        // simulate exchange macro substitution
        text = text.replace('${AUCTION_PRICE}', '5.0');
        text = text.replace('${AUCTION_PRICE}', '5.0');

        text = text.replace('%%WINNING_PRICE%%', '5.0');        // simulate exchange macro substitution for Ad Exchange


        if (text.includes("<script")) {
          //document.getElementById("image").innerHTML = "Hello";
          //text = "<script>alert('hello!');<\/script>";
          //document.getElementById("click-info").value = text + "\n\nNote: JS did not return"

          //$('#image').replaceWith(text);      DOES NOT WORK

          //document.write(text);

          //document.getElementById("click-info").value = text + "\n\nNote: JS returned OK"
          //return;

        }
        else {
          try {
            text = decodeURIComponent(text);
          } catch (e) {

          }
        }


        x = document.getElementById("click-info");
        if (typeof bid.imp[0].video == 'undefined') {
          var check = text.indexOf("</iframe>");
          if (check != -1) {
            var buf = text.substring(0, check + 9);
            document.getElementById("image").innerHTML = buf;
          } else
            check = text.indexOf("<ad");
          if (check == -1) {
            document.getElementById("image").innerHTML = text;
          } else {
            check = text.indexOf("<clickUrl>");
            var check1 = text.indexOf("</clickUrl>");
            var theClickUrl = text.substring(check + 10, check1);
            check = text.indexOf("<imgUrl>");
            check1 = text.indexOf("</imgUrl>");
            var theImageUrl = text.substring(check + 8, check1);
            var ref = "<a href='" + theClickUrl + "'><img src='" + theImageUrl + "'></a>";
            document.getElementById("image").innerHTML = ref;

            /**
              * Send the pixel beacon
              */
            check = text.indexOf("<beacon>");
            check1 = text.indexOf("</beacon>");
            var url = text.substring(check + 8, check1);
          }
        }
        else {

          var player = new window.VASTPlayer(document.getElementById('container'));

          player.once('AdStopped', function () {
            console.log('Ad finished playback!');
          });

          //  'https://platform-staging.reelcontent.com/api/public/vast/2.0/tag?campaign=cam-e951792a909f17'
          player.load(
            text
          ).then(function startAd() {
            return player.startAd();
          }).catch(function (reason) {
            alert("FUXK!");
            setTimeout(function () { throw reason; }, 0);
          });

        }

        text = vkbeautify.xml(text);
        x.value = text;   					// inner text



      },
      error: function (request, textStatus, errorThrown) {
        doModal(BootstrapDialog.TYPE_DANGER, "Error", request.responseText);
      }
    });

    ///////////////////
  }

  vastData = "" +
    "<video id='vid2' class='video-js vjs-default-skin' autoplay controls preload='auto'" +
    "      poster='http://video-js.zencoder.com/oceans-clip.png'" +
    "      data-setup='{}'" +
    "      width='300'" +
    "      height='300'" +
    "     >" +
    "    <source src='http://video-js.zencoder.com/oceans-clip.mp4' type='video/mp4'>" +
    "    <source src='http://video-js.zencoder.com/oceans-clip.webm' type='video/webm'>" +
    "    <source src='http://video-js.zencoder.com/oceans-clip.ogv' type='video/ogg'>" +
    "    <p>Video Playback Not Supported</p>" +
    "  </video>";



  function executeDyno() {
    bid = editor.get();
    console.log(JSON.stringify(bid, null, 2));
  }

  function bannerOrVideo() {
    if (videoMode == true) {
      bid = cloneObject(videoBid);
      bid.id = guid();
      bid.imp[0].id = bid.id;
      document.getElementById('bidtype').innerHTML = "<h3>Sample Dib Request: Video</h3>";
    } else if (appWall == false) {
      bid = cloneObject(bannerBid);
      bid.id = bid.imp[0].id = guid();
      document.getElementById('bidtype').innerHTML = "<h3>Sample Dib Request: Banner</h3>";
    } else {
      bid = cloneObject(bannerBid);
      bid.id = bid.imp[0].id = guid();
      imp = {
        id: bid.id,
        instl: 0,
        native: appWallImpression,
        ext: {
          nex_screen: 0
        }
      };
      bid.imp.pop();
      bid.imp.push(imp);
      document.getElementById('bidtype').innerHTML = "<h3>Sample Dib Request: Native (app-wall)</h3>";
    }
    editor.set(bid);
  }

  function doAppWall() {
    videoMode = false;
    appWall = true;
    bannerOrVideo();
  }

  function doVideo() {
    videoMode = true;
    appWall = false;
    bannerOrVideo();
  }

  function doBanner() {
    videoMode = false;
    appWall = false;
    bannerOrVideo();
  }

  return (
    <>
      <div>
        <Nav />
        <br />
        <br />
        <br />
        <br />

        <div className="container">

          <h2>
            Dib Tester
          </h2>
          <h3>
            Exchange:
            <select className="selectpicker" id="exchange_name">
              {
                options.map((option) => {
                  <option selected={option.selected}>{option.option}</option>
                })
              }
            </select>
            <input type="text" id="urlspec" className="form-control" placeholder="URL Specification"
              value="http://localhost:8080/btr/bds/" />
          </h3>
          <br />

          <h3>
            Dib Type
            <button type="button" className="btn btn-info" onClick={doBanner}>Display</button>
            <button type="button" className="btn btn-info" onClick={doAppWall}>Native
              (App Wall)</button>
            <button type="button" className="btn btn-info" onClick={doVideo}>Video</button>
          </h3>


          <div id='bidtype'>
            <h3>Sample Dib Request: Banner</h3>
          </div>
          <div id="code" style="width: 800px; height: 400px;"></div>

          <h3>
            <button type="button" className="btn btn-warning" onclick={sendTest}>Send
              Dib Request</button>
          </h3>
          <hr />
          <div id="analyze">
            <h3>X-TIME: 0, RTT: 0</h3>
          </div>
          <div id="xinstance">
            <h3>X-INSTANCE:</h3>
          </div>

          <h3>NURL:</h3>
          <div id="nurl"></div>
          <div id="container"></div>
          <Table />
          <footer>
            <p>
              Rew btr
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
