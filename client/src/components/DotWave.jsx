import { useEffect, useRef } from "react"

export default function DotWave() {

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let mouse = { x: -9999, y: -9999 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    const spacing = 35
    const maxDist = 150

    function draw() {

      ctx.clearRect(0,0,canvas.width,canvas.height)

      for(let x=0; x<canvas.width; x+=spacing){
        for(let y=0; y<canvas.height; y+=spacing){

          const dx = mouse.x - x
          const dy = mouse.y - y
          const dist = Math.sqrt(dx*dx + dy*dy)

          if(dist < maxDist){

            const force = (maxDist - dist) / maxDist
            const offset = force * 25

            ctx.beginPath()
            ctx.arc(x, y - offset, 2.5, 0, Math.PI*2)

            // brighter color
            const opacity = 0.25 + force * 0.75

            ctx.fillStyle = `rgba(148,163,184,${opacity})`
            ctx.fill()

          }

        }
      }

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
    }

  },[])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
    />
  )
}