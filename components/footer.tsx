'use client'

export function Footer() {
  return (
    <footer className="py-16 px-4" style={{ backgroundColor: '#201515' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#ff4f00', color: '#fffefb' }}>
                ⚡
              </div>
              <span className="font-semibold" style={{ color: '#fffefb' }}>Interview Arena</span>
            </div>
            <p className="text-sm" style={{ color: '#939084' }}>Gamified AI-powered interview preparation.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#fffefb' }}>Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>Features</a></li>
              <li><a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>Pricing</a></li>
              <li><a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#fffefb' }}>Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>About</a></li>
              <li><a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>Careers</a></li>
              <li><a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#fffefb' }}>Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>Privacy</a></li>
              <li><a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>Terms</a></li>
              <li><a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-sm" style={{ color: '#939084', borderTop: '1px solid #2f2a26' }}>
          <p>&copy; 2026 Interview Arena. All rights reserved.</p>
          <div className="flex gap-6 mt-6 sm:mt-0">
            <a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>Twitter</a>
            <a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>LinkedIn</a>
            <a href="#" className="transition" style={{ color: '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = '#939084'}>Discord</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
