const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const user = urlParams.get("user");
const id = urlParams.get("id");
const avatar = urlParams.get("avatar");

const tl = gsap.timeline({defaults: {duration: 0.2}})

if (urlParams.has("id") == true) {
  document.getElementById("info").innerHTML = `<img src="https://cdn.discordapp.com/avatars/${id}/${avatar}.png" alt=""><h2>${user}</h2><div class="link"><a target="_blank" href="https://discord.com/users/${id}">https://discord.com/users/${id}<a class="btn btn-small btn-primary" onclick="copy2Clipboard()"><i id="copy" class="far fa-copy"></i><i id="check" style="opacity:0;" class="fa fa-check"></i></a></a></div>`;
  document.getElementById("login").style.display = "none";
}

function copy2Clipboard() {
  ta = document.createElement('textarea');
  ta.value = `https://discordapp.com/users/${id}`;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  tl.fromTo('#copy', {y: 0, opacity:1}, {y: -10, opacity:0});
  tl.fromTo('.btn-small', {backgroundColor:"#5865F2", boxShadow:"0px 3px 13px 3px #5865F24d"}, {backgroundColor:"#49DC7C", boxShadow:"0px 3px 13px 3px #49DC7C4d"});
  tl.fromTo('#check', {y: 10, opacity:0}, {y: 0, opacity:1});
  setTimeout(function(){
    tl.fromTo('#check', {y: 0, opacity:1}, {y: -10, opacity:0});
    tl.fromTo('.btn-small', {backgroundColor:"#49DC7C", boxShadow:"0px 3px 13px 3px #49DC7C4d"}, {backgroundColor:"#5865F2", boxShadow:"0px 3px 13px 3px #5865F24d"});
    tl.fromTo('#copy', {y: 10, opacity:0}, {y: 0, opacity:1});
}, 2000);
}