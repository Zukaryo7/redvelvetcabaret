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
        function updateCountdown() {
            const now = new Date();
            const target = new Date(2026, 3, 2, 20, 0, 0); // 2 Avril, 20h

            let diff = target.getTime() - now.getTime();
            const tzNow = now.getTimezoneOffset();
            const tzTarget = target.getTimezoneOffset();
            
            if (tzNow !== tzTarget) {
                diff += (tzNow - tzTarget) * 60 * 1000;
            }

            if (diff <= 0) {
                document.querySelector(".countdown-container").innerHTML = "<h3>BILLETTERIE OUVERTE !</h3>";
                return;
            }

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = d.toString().padStart(2, '0');
            document.getElementById("hours").innerText = h.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);