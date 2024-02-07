# Subject 2 (2.5 pts)
# TOPIC: Javascript

# Given the function `function isShallowEqual(obj1, obj2, props)` where:
- the function compares the object `obj1` to the object `obj2`, using a shallow comparison and taking into account only the properties which appear as elements in the `props` array

# Punctaj defalcat:
- `obj1` must be an `object`. If another type is passed an `Error` must be thrown with the message `First input should be an object`; (0.5 pts)
- `props` must be an array `un array`. If another type is passed an `Error` must be thrown with the message `Third input should be an array`; (0.5 pts)
- All elements in `props` must be of type `string`. If another type is passed an `Error` must be thrown with the message `Each element should be a string`; (0.5 pts)
- The function compares two objects with the same properties correctly; (0.5 pts)
- The function compares two objects with different properties correctly; (0.5 pts)
