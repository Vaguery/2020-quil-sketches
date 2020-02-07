(ns negative-space-quil.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            ))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/blend-mode :blend)
  (q/ellipse-mode :radius)
  {:y-lattice
    { :width 6
      :height 6
      :color (q/color 44 100 255 100)
      :radius 3
      :angle (rand-int 100)
      :offset [0 0]}
  :c-lattice
    { :width 7
      :height 7
      :color (q/color 128 230 255 130)
      :radius 3
      :angle (rand-int 100)
      :offset [0 0]}
   :m-lattice
    { :width 8
      :height 8
      :color (q/color 214 200 255 255)
      :radius 3
      :angle (rand-int 100)
      :offset [0 0]}
      })

(defn update-state [state]
  (-> state
    (update-in , [:y-lattice :angle] #(+ 0.002 %))
    (update-in , [:m-lattice :angle] #(+ -0.004 %))
    (update-in , [:c-lattice :angle] #(+ 0.006 %))
    ))

(defn draw-lattice
  [lattice]
  (let [w (:width lattice)
        h (:height lattice)
        r (:radius lattice)
        c (:color lattice)
        angle (:angle lattice)
        offset (:offset lattice)
        scale-x (* 1.5 (/ (q/width) w))
        scale-y (* 1.5 (/ (q/height) w))
        ]
    (q/no-stroke)
    (q/fill c)
    (q/with-translation offset
      (q/with-rotation [angle]
        (doseq [x (range (- scale-x) scale-x)
                y (range (- scale-y) scale-y)]
          (q/ellipse (* x w) (* y h) (+ (/ x 10) r) (+ (/ x 10) r))
          )))))

(defn draw-state [state]
  (let [yellow (:y-lattice state)
        magenta (:m-lattice state)
        cyan (:c-lattice state)
        ]
    (q/background 255)
    (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
      (draw-lattice magenta)
      (draw-lattice cyan)
      (draw-lattice yellow)
      )))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch negative-space-quil
    :host "20200207-quil"
    :size [300 300]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]
    ))

; uncomment this line to reset the sketch:
; (run-sketch)
