# Subject 2 (2.5 pts)
# Topic: REST

# Given the application `app` fill in the `PUT` method for the address `/people/:id`:

- If a request missing any of the keys was sent the server will reply with `{"message": "person replacement should have all keys"}`. The response code will be: `400`; (0.5 pts)
- If the value in the key `job` is not one of ACCOUNTANT, PROGRAMMER RESEARCHER the server will reply with `{"message": "invalid job"}`. The response code will be: `400`; (0.5 pts)
- If the entity being updated does not exist, the server will reply with: `{"message": "not found"}`. The response code will be: `404`; (0.5 pts)
- If the element being sent in the request body is valid, the operation will be performed and the server will reply withthe code `202`. The response body will be `{"message": "accepted"}`;(0.5 pts)
- The `id` property will be unaffected irrespective of the fact that it was sent in the request body or not. (0.5 pts)