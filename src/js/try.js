const link = document.location.href;
console.log(link);

const privacy = document.getElementById('privacy');
const terms = document.getElementById('terms');
if (link.includes('privacy-policy.html')) {
  privacy.style.color = '#457036';
}

if (link.includes('termsOfService.html')) {
  terms.style.color = '#457036';
}
