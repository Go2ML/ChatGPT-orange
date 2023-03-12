
/**
 * 鐢ㄥ師鐢� JS 灏佽涓€涓� Toast 缁勪欢
 * @param msg 鏂囨湰鍐呭
 * @param type 绫诲瀷  success error  loading
 * @param duration 鎸佺画鏃堕棿
 */
function toast(e){
  // 濡傛灉 e 鐨勭被鍨嬩负 string锛岃缃甧.msg= e
  if(typeof e == 'string'){
    e = {msg: e}
  }
  if (!e.msg) {
    console.error('text 涓嶈兘涓虹┖!');
    return;
  }
  var m = document.createElement('div');
  m.id = 'toastId'; // 璁剧疆id锛屼竴涓〉闈㈡湁涓斾粎鏈変竴涓猅oast
  // m.setAttribute('class', 'toast');   // 璁剧疆绫诲悕
  m.classList.add('toast', 'in');
  switch (e.type) {
    case 'success':
      m.innerHTML = `<i class="iconfont icon-success"></i><p class="text">${e.msg}</p>`;
      break;
    case 'error':
      m.innerHTML = `<i class="iconfont icon-error"></i><p class="text">${e.msg}</p>`;
      break;
    case 'loading':
      m.innerHTML = `<i class="iconfont icon-loading"></i><p class="text">${e.msg}</p>`;
      break;
    default:
      m.innerHTML = `<p class="text">${e.msg}</p>`;
      break;
  }
  var toastId = document.getElementById('toastId');

  // 鍒ゆ柇褰撳墠椤甸潰娌℃湁 id=toastId 灏辨彃鍏�
  if(toastId==null){
    document.body.appendChild(m);
    toastId = document.getElementById('toastId');
    toastId.classList.add('in');

    // 璁剧疆瀹氭椂鍣�
    var hideTimeOut = setTimeout(()=> {
      toastId.classList.remove('in');
      clearInterval(hideTimeOut)   // 娓呴櫎 TimeOut
      document.body.removeChild(m)
    }, e.time || 2e3);
  }
}