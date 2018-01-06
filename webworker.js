function summation(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

self.addEventListener('message', function(e) {
  const result = summation(e.data);
  self.postMessage(result);
}, false);
