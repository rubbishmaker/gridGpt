 const baseSize = 10 // 基准值
    function setRem() {
      // 相对于1920像素的缩放比
      let scale = document.documentElement.clientWidth / 1920
      // 根据屏幕变化 1rem 对应的 font-size
      const realFont = baseSize * scale
      document.documentElement.style.fontSize = realFont + 'px'
    }
    setRem()
    window.onresize = () => {
      setRem()
    }

export {}