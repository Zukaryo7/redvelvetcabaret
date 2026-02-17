        // CONF
        window.onload = () => {
            const duration = 0.3 * 1000;
            const end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#ff0000', '#8b0000']
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#ff0000', '#8b0000']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        };


        // COUNTDOWN
        const targetDate = new Date("April 02, 2026 20:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                document.querySelector(".countdown-container").innerHTML = "<h3>LA BILLETTERIE EST OUVERTE !</h3>";
                return;
            }

            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = d.toString().padStart(2, '0');
            document.getElementById("hours").innerText = h.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
        }


        updateCountdown();


        const timerInterval = setInterval(updateCountdown, 1000);