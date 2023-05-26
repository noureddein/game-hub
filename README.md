### Chakra breakpoints
```javascript
const breakpoints = {
  sm: '30em',    // <768px
  md: '48em',    // 768px - 991px
  lg: '62em',    // 992px - 1279px
  xl: '80em',    // 1280px - 1535px
  '2xl': '96em', // >=1536px
}

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}
```


## Cookies 

- req.cookies has options:
  - httpOnly: make the cookies not accessible from client browser
  - secure: make cookies accessible only on https
  - maxAge: make cookies valid for certain amount of time (measured in ms)