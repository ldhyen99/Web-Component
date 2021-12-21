const recos = {
    hennessy: ["martel", "remymartin"],
    martel: ["remymartin", "hennessy"],
    remymartin: ["hennessy", "martel"]
};

const img_hash = {
    hennessy: {
        hash: '146520601-ff3de252-8e8e-4e40-a1af-88e914b90eda.jpeg',
    },
    martel: {
        hash: '146512212-8078589a-23d2-49e7-bcc7-600192391df8.jpg',
    },
    remymartin: {
        hash : '146519723-9fa3244d-c6d4-47bf-9eee-5971cc7d89eb.jpeg'
    }
}

class InspireRecommendations extends HTMLElement {
    connectedCallback() {
        const sku = this.getAttribute("sku");
        this.innerHTML = `
            <div class="inspire_fragment">
            <h2 class="inspire_headline">Recommendations</h2>
            <div class="inspire_recommendations">
            ${recos[sku]
                .map(
                reco =>   `<a href="http://localhost:3001/item/${reco}">
                    <img src="https://user-images.githubusercontent.com/59736798/${img_hash[reco].hash}" />
                </a>`   
                )
                .join("\n")}
            </div>
        </div>
        `;
    }
}

window.customElements.define(
    "inspire-recommendations",
    InspireRecommendations
);
