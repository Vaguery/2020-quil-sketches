(ns negative-space-quil.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            ))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/ellipse-mode :radius)
  {:back-lattice
    {:width 20 :height 20 :color (q/color 111) :radius 8}
   :front-lattice
    {:width 21 :height 21 :color (q/color 240) :radius 9}
   :angle 11
   })

(defn update-state [state]
  (-> state
    (update-in , [:angle] #(* 1.00025 %))
    ))

(defn draw-lattice
  [lattice]
  (let [w (:width lattice)
        h (:height lattice)
        r (:radius lattice)
        c (:color lattice)
        scale-x (* 1.5 (/ (q/width) w))
        scale-y (* 1.5 (/ (q/height) w))
        ]
    (q/no-stroke)
    (q/fill c)
    (doseq [x (range (- scale-x) scale-x)
            y (range (- scale-y) scale-y)]
      (q/ellipse (* x w) (* y h) r r)
      )))

(defn draw-state [state]
  (let [bl (:back-lattice state)
        fl (:front-lattice state)]
    (q/background 240)
    (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
      (draw-lattice bl)
      (q/with-rotation [(:angle state)]
        (draw-lattice fl)
        ))
    ))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch negative-space-quil
    :host "negative-space-quil"
    :size [400 400]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
