//- The interface `Parity` defines equality `(==)` and inequality `(!=)`.  This interface is implemented on the
//- majority of non-native data-types.
//-
//- ```haskell
//- interface Parity a
//-     (==) :: a -> Bool
//-     (!=) :: a -> Bool
//-     (!=) y =
//-         ! (this.(==) y)
//- ```



//- A default implementation for (!=).
//= Parity a => default$NOT$EQUAL :: a -> Bool
function default$NOT$EQUAL(other) {
    return !this.$EQUAL$EQUAL(other);
}


module.exports = {
    default$NOT$EQUAL
};