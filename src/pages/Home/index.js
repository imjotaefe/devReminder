import React from 'react'
import Header from '../../components/Header';
import Card from '../../components/Card';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <Card/>
      </div>
    </div>
  )
}
