# Subiectul 2 (2.5 pts)
# Tematica: Javascript

# Avand urmatoarea functie `function isShallowEqual(obj1, obj2, props)` unde:
- funcția compară obiectul `obj1` cu obiectul `obj2`, comparația fiind shallow și luând în considerație doar proprietățile care se regăsesc în array-ul `props`

# Punctaj defalcat:
- `obj1` trebuie sa fie de tip `object`. Daca alt tip este pasat ca parametru aruncati `Error` cu mesajul `First input should be an object`; (0.5 pts)
- `props` trebuie sa fie `un array`. Daca alt tip este pasat ca parametru aruncati `Error` cu mesajul `Third input should be an array`; (0.5 pts)
- Toate elementele din `props` trebuie sa fie `string`. Daca alt tip este pasat ca parametru aruncati `Error` cu mesajul `Each element should be a string`; (0.5 pts)
- Funcția compară corect două obiecte dacă au aceleași proprietăți; (0.5 pts)
- Funcția compară corect două obiecte dacă nu au aceleași proprietăți; (0.5 pts)
