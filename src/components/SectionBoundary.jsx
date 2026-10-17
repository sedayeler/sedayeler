import { Component } from 'react';

// Bir bölüm hata verirse tüm sayfa boşalmasın; sadece o bölüm kısa bir uyarı göstersin.
export default class SectionBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error(`[${this.props.name}] bölümü yüklenemedi:`, error);
  }

  render() {
    if (this.state.failed) {
      return (
        <section className="section">
          <div className="section-head">
            <span>{this.props.name}</span>
            <span>Bu bölüm yüklenemedi — konsola bakın</span>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}
