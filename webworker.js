function summation(n) {
  var result = 0;
  for (var i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

self.addEventListener('message', function(e) {
  var result = summation(e.data);
  self.postMessage(result);
}, false);
