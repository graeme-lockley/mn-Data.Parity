
The interface `Parity` defines equality `(==)` and inequality `(!=)`.  This interface is implemented on the
majority of non-native data-types.

```haskell
interface Parity a
    (==) :: a -> Bool
    (!=) :: a -> Bool
    (!=) y =
        ! (this.(==) y)
```

### default$NOT$EQUAL

```haskell
Parity a => default$NOT$EQUAL :: a -> Bool
```

A default implementation for (!=).

