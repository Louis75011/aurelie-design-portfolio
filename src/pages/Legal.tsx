export default function Legal() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-serif mb-12">Mentions <span className="italic text-purple">Légales</span></h1>
      
      <section className="space-y-8 text-black/70 leading-relaxed font-light">
        <div>
          <h2 className="text-2xl font-serif text-black mb-4">Éditeur du site</h2>
          <p>
            Aurélie Renier — Arx Systema<br />
            Entrepreneur individuel<br />
            Siège social : Yvelines, France<br />
            Email : contact@aurelie-renier.fr
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-black mb-4">Hébergement</h2>
          <p>
            Ce site est hébergé par Google Cloud Run.<br />
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-black mb-4">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus (textes, images, graphismes, logo) présents sur ce site est la propriété exclusive d'Aurélie Renier, sauf mention contraire. Toute reproduction est interdite sans accord préalable.
          </p>
        </div>

        <div className="pt-10 border-t border-purple/10">
          <h2 className="text-2xl font-serif text-black mb-4">Confidentialité</h2>
          <p>
            Les informations recueillies via le formulaire de contact sont destinées uniquement à traiter votre demande. Elles ne sont jamais cédées à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès et de suppression de vos données en me contactant par email.
          </p>
        </div>
        
        <div className="pt-10 border-t border-purple/10 text-xs italic">
          <p>Dernière mise à jour : Mai 2026</p>
        </div>
      </section>
    </div>
  );
}

export function Privacy() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-serif mb-12">Politique de <span className="italic text-purple">Confidentialité</span></h1>
      <section className="space-y-6 text-black/70 leading-relaxed font-light">
        <p>Nous attachons une grande importance à la protection de vos données personnelles.</p>
        <h2 className="text-2xl font-serif text-black mt-8 mb-4">Données collectées</h2>
        <p>Nous collectons votre nom, prénom et email uniquement lorsque vous remplissez le formulaire de contact.</p>
        <h2 className="text-2xl font-serif text-black mt-8 mb-4">Finalité</h2>
        <p>Ces données nous permettent de vous recontacter pour répondre à vos demandes de renseignements ou de devis.</p>
        <h2 className="text-2xl font-serif text-black mt-8 mb-4">Vos droits</h2>
        <p>Vous pouvez demander la suppression de vos données à tout moment via contact@aurelie-renier.fr.</p>
      </section>
    </div>
  );
}

export function Accessibility() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-serif mb-12">Déclaration <span className="italic text-purple">d'Accessibilité</span></h1>
      <section className="space-y-6 text-black/70 leading-relaxed font-light">
        <p>Aurélie Renier s'engage à rendre son site internet accessible conformément à l'article 47 de la loi n° 2005-102 du 11 février 2005.</p>
        <p>Cette déclaration d'accessibilité s'applique au site Aurélie Renier - Graphiste Catholique.</p>
        <h2 className="text-2xl font-serif text-black mt-8 mb-4">État de conformité</h2>
        <p>Le site est partiellement conforme au référentiel général d'amélioration de l'accessibilité (RGAA).</p>
      </section>
    </div>
  );
}
