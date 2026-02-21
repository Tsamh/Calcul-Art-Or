let expression = '';
        const inputResultat = document.getElementById('resultat');

        function ajouterChiffre(chiffre) {
            expression += chiffre;
            inputResultat.value = expression;
        }

        function ajouterDecimal() {
            if (!expression.endsWith('.')) {
                expression += '.';
                inputResultat.value = expression;
            }
        }

        function ajouterOperateur(operateur) {
            expression += operateur;
            inputResultat.value = expression;
        }

        function effacer() {
            expression = expression.slice(0, -1);
            inputResultat.value = expression;
        }

        function calculerResultat() {
            try {
                const resultat = eval(expression);
                inputResultat.value = resultat;
                expression = resultat.toString();
            } catch (error) {
                inputResultat.value = 'Erreur';
                expression = '';
            }
        }

        function reinitialiser() {
            expression = '';
            inputResultat.value = '';
        }

        // Écouteur d'événement pour le clavier
        document.addEventListener('keydown', function(event) {
            const key = event.key;

            // Chiffres
            if (/^[0-9]$/.test(key)) {
                ajouterChiffre(key);
            }
            // Opérateurs
            else if (['+', '-', '*', '/'].includes(key)) {
                ajouterOperateur(key);
            }
            // Point décimal
            else if (key === '.') {
                ajouterDecimal();
            }
            // Entrée (calculer)
            else if (key === 'Enter') {
                calculerResultat();
            }
            // Échap (réinitialiser)
            else if (key === 'c') {
                reinitialiser();
            }
            // Backspace (effacer)
            else if (key === 'Backspace') {
                effacer();
            }
        });