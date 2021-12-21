const prices = {
    martel: 42,
    hennessy: 48,
    remymartin: 60,
  };
  
  class CheckoutBuy extends HTMLElement {
    connectedCallback() {
        const sku = this.getAttribute("sku");
        this.innerHTML = `
            <button type="button">buy for $${prices[sku]}</button>
        `;

        this.querySelector("button").addEventListener("click", () => {
            alert("Thank you ❤️");
        });
    }

    disconnectedCallback() {
        this.querySelector("button").removeEventListener("click");
    }
}

window.customElements.define("checkout-buy", CheckoutBuy);