(ns negative-space-quil.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            ))

(defn create-lattice
  [lattice-def edge]
  (let [w (:width lattice-def)
        h (:height lattice-def)
        r (:radius lattice-def)
        c (:color lattice-def)
        scale-x (* 1.5 (/ edge w))
        scale-y (* 1.5 (/ edge h))
        gr (q/create-graphics (* w scale-x) (* h scale-y))
        ]
    (q/with-graphics gr
        (q/no-stroke)
        (q/fill c)
        (doseq [x (range (- scale-x) scale-x)
                y (range (- scale-y) scale-y)]
          (q/ellipse (+ -1 (* x w) (rand 2))
                     (+ -1 (* y h) (rand 2))
                     (+ (/ x 7) r) (+ (/ x 7) r))
                     ))
    gr
    ))

(defn m-def
  []
  { :width 7
    :height 7
    :color (q/color 214 200 255 255)
    :radius 2
    })

(defn c-def
  []
  { :width 6
    :height 6
    :color (q/color 128 230 255 128)
    :radius 2
    })

(defn y-def
  []
  { :width 6
    :height 6
    :color (q/color 44 100 255 64)
    :radius 2
    })

(defn setup []
  (q/frame-rate 100)
  (q/color-mode :hsb)
  (q/blend-mode :blend)
  (q/ellipse-mode :radius)
  (q/image-mode :center)
  {:m-lattice (create-lattice (m-def) (q/width))
    :m-angle (rand-int 100)
    :c-lattice (create-lattice (c-def) (q/width))
    :c-angle (rand-int 100)
    :y-lattice (create-lattice (y-def) (q/width))
    :y-angle (rand-int 100)
    :mouse-within false
    :mouse-press [nil nil]
    :mouse-enter [nil nil]
    })

(defn update-state [state]
  (-> state
    (update , :m-angle #(+ % (/ (rand) 1000)))
    (update , :c-angle #(+ % (/ (rand) -1000)))
    (update , :y-angle #(+ % (/ (rand) 1000)))
    ))

(defn mouse-press-detection
  [state event]
  (update state :mouse-press [(:x event) (:y event)])
  )

(defn mouse-enter-detection
  [state event]
  (update state :mouse-enter [(:x event) (:y event)])
  )

(defn draw-debug-alert
  [state]
  (q/with-translation [30 30]
    (q/fill 220)
    (q/rect 0 0 300 200)
    (q/fill 0)
    (q/text (str "mouse-x: " (q/mouse-x)) 10 10 300 40)
    (q/text (str "mouse-y: " (q/mouse-y)) 10 25 300 40)
    (q/text (str "mouse-pressed?: " (q/mouse-pressed?)) 10 40 300 40)
    (q/text (str "mouse-press: " (:mouse-press state) " <- fun-mode event") 10 55 300 40)
    (q/text (str "mouse-enter: " (:mouse-enter state) " <- fun-mode event") 10 70 300 40)
    )
    )


(defn draw-state [state]
  (let [magenta (:m-lattice state)
        cyan (:c-lattice state)
        yellow (:y-lattice state)
       ]
    (q/background 255)
    (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
      (q/with-rotation [(:m-angle state)]
        (q/image magenta 0 0)
        )
      (q/with-rotation [(:c-angle state)]
        (q/image cyan 0 0)
        )
      (q/with-rotation [(:y-angle state)]
        (q/image yellow 0 0)
        ))
  (draw-debug-alert state)
  ))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch negative-space-quil
    :host "20200209-quil"
    :size [400 400]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode m/navigation-2d]
    :mouse-pressed mouse-press-detection
    :mouse-enter mouse-enter-detection
    ))

; uncomment this line to reset the sketch:
; (run-sketch)
