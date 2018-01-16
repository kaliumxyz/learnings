doubleMe x = x + x
doubleUs x y = doubleMe x + doubleMe y
doubleSmallNumber x = if x > 200
then x
else x * 2
doubleSmallNumber' x = (if x > 200 then x else x*2) + 1
coolList = [1..9]
coolList' = ['a'..'z'] ++ ['A'..'Z']
 --  list comprehension.
twoNumberComprehension = [x*y | x <- [1,2, 10], y <- [0,8, 16], x*y > 50, x*y < 200]
names = ["alex", "sparky", "alvist", "snow"]
adjentives = ["yellow", "greedy"]
named = [x ++ " " ++ y | x <- adjentives, y <- names]
length' xs = sum [1 | _ <- xs]
removeUppercase st = [ c | c <- st, c `elem` ' ':['a'..'z']]
deepRemoveOdd xxs = [[x | x<-xs, even x] | xs <- xxs]
deepRemoveUppercase xst = [removeUppercase st | st <- xst]

-- tuples
triTest = [(x,y) | x <- [1..10], y <- [1..x] ]
tri = [ (x,y,z) | x <- [1..20], y <- [1..20], z <- [1..20], x^2 + y^2 == z^2]
pew [a] = zip [1..] [a]

-- types
doubleNumber x = (if x /= 200 then x else x*2) + 1
sortTest = read "[1,3,5]" ++ [3]

-- pattern matching examples
patLength :: (Num b) => [a] -> b
patLength [] = 0
patLength (_:xs) = 1 + patLength xs

patSum :: (Num a) => [a] -> a
patSum [] = 0
patSum (x:xs) = x + patSum xs

patGuard :: (RealFloat a) => (a, a) -> String
patGuard (0, 0) = "error" 
patGuard tuple
        | fst tuple == 10 = "a"
        | fst tuple == 20 = "b"
        | fst tuple == 30 = "c"
        | otherwise = "otherwise"

calcBMI :: (RealFloat a) => (a, a) -> a
calcBMI (height, weight) = height / weight ^ 2

insultBMI :: (RealFloat a) => (a, a) -> String
insultBMI tuple
        | bmi <= skinny = "You're underweight, you emo you!"
        | bmi <= normal = "You're supposedly normal. Pffft I bet you're ugly!"
        | bmi <= fat = "You're fat, Lose some weight Fatty!"
        | otherwise = "You're a whale, congratulations!"
          where bmi = calcBMI tuple
                skinny = 18.5
                normal = 25.0
                fat = 30.0

initials :: String -> String -> String
initials firstname lastname = [f] ++ ", " ++ [l] ++ "."
  where (f:_) = firstname
        (l:_) = lastname

cylinder :: ( RealFloat a) => a -> a ->  a 
cylinder r h =
  let sideArea = 2 * pi * r * h
      topArea = pi * r ^ 2
  in sideArea + 2 * topArea

fibonacci :: Int -> Int
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci x = x + fibonacci (x - 1)

maximum' :: (Ord a) => [a] -> a
maximum' [] = error "maximum of empty list"
maximum' [x] = x
maximum' (x:xs)
    | x > maxTail = x
    | otherwise = maxTail
    where maxTail = maximum' xs
