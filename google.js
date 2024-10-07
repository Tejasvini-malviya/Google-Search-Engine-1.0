const clean = document.getElementById('clear'); 
const input = document.getElementById('input');  
const search = document.getElementById('search');  

clean.addEventListener('click', () => { 
    input.value = ''; 
    clean.style.display = 'none';  
});


input.addEventListener('input', () => {
    if (input.value.length > 0) {
        clean.style.display = 'block';  
    } else {
        clean.style.display = 'none'; 
    }
});

search.addEventListener('click', () => { 
    const query = input.value;
    if (query) {
    
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});
