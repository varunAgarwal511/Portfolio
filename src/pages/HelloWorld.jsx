import { useEffect, useState } from "react";

export default function HelloWorld() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #091221 0%, #172a45 100%)',
      color: 'white',
      fontFamily: '"Outfit", "Inter", sans-serif'
    }}>
      <div style={{
        padding: '4rem 6rem',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px)',
        borderRadius: '32px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
        transform: show ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        opacity: show ? 1 : 0,
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <div style={{
          marginBottom: '1rem',
          display: 'inline-block',
          padding: '0.4rem 1.2rem',
          background: 'rgba(100, 255, 218, 0.1)',
          color: '#64ffda',
          borderRadius: '50px',
          fontSize: '0.9rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          New Page Created
        </div>
        <h1 style={{
          fontSize: '5rem',
          fontWeight: 800,
          margin: '0 0 1rem 0',
          background: 'linear-gradient(90deg, #64ffda 0%, #00bcd4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Hello World
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#8892b0',
          margin: 0,
          maxWidth: '400px',
          lineHeight: 1.6
        }}>
          A brand new beautiful page created specifically to print this message.
        </p>
      </div>
    </div>
  );
}
