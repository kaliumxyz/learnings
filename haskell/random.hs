import System.Random
import Data.List
 
randomlist :: Int -> StdGen -> [Int]
randomlist n = take n . unfoldr (Just . random)
