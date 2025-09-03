# Contentful Hooks

Ten folder zawiera custom hooki do pobierania danych z Contentful.

## Dostępne Hooki

### `useContentful<T>(endpoint: string)`

Generyczny hook do pobierania danych z dowolnego endpointu Contentful.

**Parametry:**

- `endpoint` - URL endpointu API (np. "/api/allergens")

**Zwraca:**

- `data` - tablica danych
- `loading` - stan ładowania
- `error` - błąd (jeśli wystąpił)
- `refetch` - funkcja do ponownego pobrania danych

### `useAllergenProducts()`

Specjalistyczny hook do pobierania produktów alergenowych.

**Zwraca:**

- `data` - tablica produktów alergenowych
- `loading` - stan ładowania
- `error` - błąd (jeśli wystąpił)
- `refetch` - funkcja do ponownego pobrania danych

### `usePosts()`

Hook do pobierania postów/blogów.

### `useLocations()`

Hook do pobierania lokalizacji.

### `useSlides()`

Hook do pobierania slajdów.

## Przykład użycia

```tsx
import { useAllergenProducts } from "@/hooks/useContentful";

const MyComponent = () => {
  const { data, loading, error, refetch } = useAllergenProducts();

  if (loading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Błąd: {error}</div>;
  }

  return (
    <div>
      {data.map((product, index) => (
        <div key={index}>{product.title}</div>
      ))}
    </div>
  );
};
```

## Korzyści

1. **Ponowne użycie** - jeden hook dla wielu komponentów
2. **Zarządzanie stanem** - automatyczne zarządzanie loading, error i data
3. **TypeScript** - pełne wsparcie dla typów
4. **Łatwość użycia** - prosty API
5. **Spójność** - jednolity sposób pobierania danych w całej aplikacji
