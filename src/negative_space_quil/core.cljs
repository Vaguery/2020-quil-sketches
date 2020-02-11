(ns negative-space-quil.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [clojure.set :as s]
            ))

(defrecord Agent [idx hue x y neighbors others])

(defn random-neighbors
  [idx how-many pool-size]
  (let [pool (remove #{idx} (range pool-size))]
    (take how-many (shuffle pool))
    ))

(defn rand-node
  [idx connectedness pool-size]
  (let [neighbors (random-neighbors idx connectedness pool-size)]
    (->Agent
      idx ; idx
      (rand-int 256) ; hue
      (rand-int (q/width)) ; x
      (rand-int (q/height)) ; y
      neighbors ; neighbors
      (remove (conj neighbors idx) (range pool-size)) ; others
      )))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/blend-mode :blend)
  (q/ellipse-mode :radius)
  (q/image-mode :center)
  {:dudes
    (map #(rand-node % 1 25) (range 25))
    :spring-distance 30
    :hooke-constant 0.1
  })

(defn update-state
  [state]
  (let [dudes (:dudes state)]
    (assoc
      state
      :dudes
      (map
        #(update % :x (fn [x] (mod (+ (rand-int 3) -1 x) (q/width))))
        dudes
        ))))


(defn draw-state [state]
  (let [dudes (:dudes state)]
    (q/background 200)
    (doseq [dude dudes]
      (q/fill (q/color (:hue dude) 255 255 150))
      (q/no-stroke)
      (q/ellipse (:x dude) (:y dude) 10 10)
      (q/stroke 100 100)
      (doseq [nb (:neighbors dude)]
        (q/line (:x dude) (:y dude) (:x (nth dudes nb)) (:y (nth dudes nb)))
        ))))


; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch negative-space-quil
    :host "20200210-quil"
    :size [300 300]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]
    ))

; uncomment this line to reset the sketch:
; (run-sketch)
