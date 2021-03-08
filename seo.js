
var x = window.location.host;
document.head.innerHTML += `
<title>New Vue js Project</title>
<meta property="og:url" content=${x}>
`;
if(document.querySelector('omg')){
    document.querySelector('img').setAttribute('alt', 'picture');
    document.querySelector('img').setAttribute('async','true');
}

