const API_URL = "https://SENIN_API_ADRESIN/bets";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("bets");

    data.forEach(bet => {
      const div = document.createElement("div");
      div.className = "bet";

      div.innerHTML = `
        <strong>${bet.home_team} vs ${bet.away_team}</strong><br>
        🎯 Güven: %${bet.confidence.toFixed(1)}<br>
        💰 Ev Oranı: ${bet.home_odds}<br>
        📈 EV: ${bet.EV_home.toFixed(2)}
      `;

      container.appendChild(div);
    });
  });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
