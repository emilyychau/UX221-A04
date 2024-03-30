class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

//

class EmilyElement extends HTMLElement{
    connectedCallback(){
		const span = document.createElement('span');
		span.innerHTML = '© ';
        const CopyrightYear = new Date().getFullYear();
		span.innerHTML += `${CopyrightYear} Emily Chau`;
		this.appendChild(span); 
    }
}

customElements.define("x-emily", EmilyElement);