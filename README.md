## Nextjs Case Study - Given's Thought Process

### API Type Hypes
**Problem**: None of the API calls is typed. Please make sure that the responses of the API calls are validated so we are 100% sure about the type.

**Solution**: First thing for me was to visit the provided API URL to see what is returned, if I know what is returned then I know what to expect.

An example of a product from which I derived the types:

```
{
    "products": [
        {
            "id": 1,
            "title": "Essence Mascara Lash Princess",
            "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "category": "beauty",
            "price": 9.99,
            "discountPercentage": 7.17,
            "rating": 4.94,
            "stock": 5,
            "tags": [
                "beauty",
                "mascara"
            ],
			...etc
        }
    ],
    "total": 194,
    "skip": 0,
    "limit": 1
}
```

Using this, I am able to determine the types for each field and type for the response.

### Translation Typo Turmoil
**Problem**: We are using a translation implementation for the shop. The translation typing is not working properly, it seems there is a bug or maybe something is missing.
Please fix the implementation so that typing works (as in the pic below).

**Solution**: 

1. Find `tr` definition and determine it's type = `TrFn`
2. I then worked my way to the type definition for `TrFn`
3. Found that the type `TrFn` extends `TranslatableArgs`
4. Added `prefix?: string` as optional to `TranslatableArgs` (this allows fellow devs to decide whether to include it or not based on the context where `tr` is called)
5. Explicitly define the parameters `translatable` and `args` in `TrFn` instead of using a rest parameter (...params). This makes the function signature clearer and more understandable. Also, explicitly defining `args: Args` is what allows the IntelliSense magic to show us `prefix` while typing

```
export type TrFn = <German extends string, Args extends TranslatableArgs<German>>(
    translatable: Translatable<German, Args>,
    args?: Args
) => TranslatableReturnType<German, Args>;
```

- `translatable: Translatable<German, Args>` -> Function that takes `lang` and `args` and returns a translated string or JSX element
- `args?: Args` -> This param is an object containing the arguments for the translation, which can include placeholders and additional properties like `prefix` in our case

### Page Load Lag!
**Problem**: It appears that the page sometimes takes a long time to load. Can you please find out why and make sure that when the page takes a long time to load, the part that is causing the delay does not influence the rest of the page?

**Solution**: Slow for me here, means perhaps a call is taking long to be resolved

1. Find the naughty API call that's taking long to resolve = `getAlsoBought`
2. Find the component where this call is being made = `<AlsoBought />`
3. Make use of an awesome built-in React component - `<Suspense>`, and wrap our component `<AlsoBought/>` component in the `Suspense` boundary - this helps us to provide a better UX 
4. Doing this means we will show fallback content (in my case the skeleton) while all the code and data needed by the children is being loaded.

### Pageload Panic Fix!
**Problem**: Our customers are really upset. Sometimes on page load, there is an error and the whole page breaks. Please find out the issue and make sure that all API calls handle errors gracefully. Keep type safety in mind; we want to be sure that:

**Solution**: Page breaking to me may mean something is kaputt server side (backend) and is not being handling adequately on the frontend 

1. Find the naughty API call that's breaking the page = `getComments`
2. Use `try...catch` blocks (this is a JavaScript best practice, when dealing with asynchronous operations like fetching data from an API)
3. This then allows me to handle potential network or server errors gracefully and prevent the application from entering an inconsistent or undefined state due to unhandled exceptions
