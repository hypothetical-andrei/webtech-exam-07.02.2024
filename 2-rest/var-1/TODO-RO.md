# Subiect 2 (2.5 pts)
# Tematică: REST

# Dată fiind aplicația `app` completați metoda `PUT` la adresa `/people/:id`:

- Dacă s-a trimis un request din care lipsește oricare dintre chei serverul va răspunde cu `{"message": "person replacement should have all keys"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă valoarea trimisă în cheia `job` nu este una dintre ACCOUNTANT, PROGRAMMER RESEARCHER severul va răspunde cu `{"message": "invalid job"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă entitatea a cărei editare se încearcă nu există serverul va răspunde cu: `{"message": "not found"}`. Codul de răspuns va fi: `404`; (0.5 pts)
- Dacă elementul trimis prin corpul request-ului este valid operațiunea se va face, iar serverul va răspunde cu codul `202`. Corpul răspunsului va fi `{"message": "accepted"}`;(0.5 pts)
- Proprietatea `id` nu este afectată de editare, indiferent dacă a fost trimisă în corpul request-ului sa nu. (0.5 pts)