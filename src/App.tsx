import { Routes, Route } from 'react-router-dom';
import { SiteNav } from '@/components/SiteNav';
import { Home } from '@/pages/Home';
import { StageView } from '@/pages/StageView';
import { CouncilView } from '@/pages/CouncilView';
import { Work } from '@/pages/Work';
import { Team } from '@/pages/Team';
import { Contact } from '@/pages/Contact';
import { Partnership } from '@/pages/Partnership';
import { SpinnerLab } from '@/pages/SpinnerLab';

export default function App() {
  return (
    <>
      <SiteNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stage/:id" element={<StageView />} />
          <Route path="/council/:id" element={<CouncilView />} />
          <Route path="/work" element={<Work />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} />
          {/* Off-nav prototype room - the homepage's unifying strand motif. */}
          <Route path="/spinner-lab" element={<SpinnerLab />} />
        </Routes>
      </main>
    </>
  );
}
