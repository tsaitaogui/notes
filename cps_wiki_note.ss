(define (cps-prim f)

  (lambda args

    (let ((r (reverse args)))

      ((car r) (apply f

                 (reverse (cdr r)))))))

(define *& (cps-prim *))

(define +& (cps-prim +))

(define =& (cps-prim =))

(define -& (cps-prim -))

(define (sqrt& n k)

        (*& n k))

(define (factorial& n k)

(=& n 0 (lambda (b)

          (if b                    ; growing continuation

              (k 1)                ; in the recursive call

              (-& n 1 (lambda (nm1)

                       (factorial& nm1 (lambda (f)

                                        (*& n f k)))))))))                            

 

(define (pyth& x y k)

(*& x x (lambda (x2)

          (*& y y (lambda (y2)

                   (+& x2 y2 (lambda (x2py2)

                              (sqrt& x2py2 k))))))))

                             

(factorial& 5 display)    