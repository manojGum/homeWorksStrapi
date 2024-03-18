import type { Schema, Attribute } from '@strapi/strapi';

export interface BenefitsDetailsBenefitsDetails extends Schema.Component {
  collectionName: 'components_benefits_details_benefits_details';
  info: {
    displayName: 'Benefits Details';
    icon: 'cube';
  };
  attributes: {
    benefitsTitles: Attribute.String & Attribute.Required;
    benefitsIcons: Attribute.Media & Attribute.Required;
  };
}

export interface BrandsPartnerBrandsPartner extends Schema.Component {
  collectionName: 'components_brands_partner_brands_partners';
  info: {
    displayName: 'Brands Partner';
    icon: 'crown';
    description: '';
  };
  attributes: {
    brand_logo: Attribute.Media & Attribute.Required;
  };
}

export interface CardCompareFeaturesCardCompareFeatures
  extends Schema.Component {
  collectionName: 'components_card_compare_features_card_compare_features';
  info: {
    displayName: 'Card Compare Features';
    icon: 'eye';
    description: '';
  };
  attributes: {
    features: Attribute.Enumeration<
      [
        'base_earn_rate',
        'accelerated_reward_points',
        'activation_benefit',
        'milestone_benefit',
        'airport_lounge_benefit',
        'concierge_service',
        'meet_greet_airport',
        'movie_offer',
        'dining_offer',
        'fuel_surcharge_waiver',
        'emi_offer',
        'golf_offer',
        'insurance_benefits',
        'joining_fee',
        'annual_fee',
        'interest_rate',
        'foreign_currency',
        'cash_withdrawal_fee'
      ]
    >;
    feature_value: Attribute.String;
    feature_additional_value: Attribute.String;
  };
}

export interface CardDetailsCardDetails extends Schema.Component {
  collectionName: 'components_card_details_card_details';
  info: {
    displayName: 'Card Details';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    joiningInfo: Attribute.Text & Attribute.Required;
  };
}

export interface CardEntitiesCardFees extends Schema.Component {
  collectionName: 'components_card_entities_card_fees';
  info: {
    displayName: 'CardFees';
    icon: 'folder';
  };
  attributes: {
    cardFees: Attribute.String & Attribute.Required;
  };
}

export interface CardEntitiesCard extends Schema.Component {
  collectionName: 'components_card_entities_cards';
  info: {
    displayName: 'Card';
    icon: 'plus';
    description: '';
  };
  attributes: {
    joining_title: Attribute.String;
    joining_value: Attribute.String & Attribute.Required;
    annual_title: Attribute.String & Attribute.Required;
    annual_value: Attribute.String;
    reward_title: Attribute.String & Attribute.Required;
    reward_value: Attribute.String & Attribute.Required;
    cash_back_title: Attribute.String & Attribute.Required;
    cash_back_value: Attribute.String & Attribute.Required;
    discount_title: Attribute.String;
    discount_value: Attribute.String;
  };
}

export interface CardEntitiesDiscount extends Schema.Component {
  collectionName: 'components_card_entities_discounts';
  info: {
    displayName: 'discount';
    icon: 'feather';
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
  };
}

export interface CardEntitiesEarnRewards extends Schema.Component {
  collectionName: 'components_card_entities_earn_rewards';
  info: {
    displayName: 'Earn Rewards';
    icon: 'feather';
    description: '';
  };
  attributes: {
    reward_image: Attribute.Media & Attribute.Required;
    reward_bg_image: Attribute.Media & Attribute.Required;
    reward_heading: Attribute.String & Attribute.Required;
    rew_discount: Attribute.Component<'card-entities.discount', true> &
      Attribute.Required;
    cta: Attribute.Component<'cta.links'> & Attribute.Required;
  };
}

export interface CardEntitiesOtherDiscount extends Schema.Component {
  collectionName: 'components_card_entities_other_discounts';
  info: {
    displayName: 'Other Discount';
    icon: 'feather';
    description: '';
  };
  attributes: {
    disc_heading: Attribute.String;
    disc_image: Attribute.Media & Attribute.Required;
    cta: Attribute.Component<'cta.links'>;
    content: Attribute.Component<'card-entities.discount', true> &
      Attribute.Required;
  };
}

export interface CardsCollectionInfoCardsCollections extends Schema.Component {
  collectionName: 'components_cards_collection_info_cards_collections';
  info: {
    displayName: 'Cards Collections';
    icon: 'crown';
  };
  attributes: {
    joiningDetails: Attribute.String & Attribute.Required;
  };
}

export interface CtaLinks extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'CTA';
    icon: 'rotate';
    description: '';
  };
  attributes: {
    cta_type: Attribute.Enumeration<['internal', 'external']>;
    cta_url: Attribute.String;
    cta_title: Attribute.String;
  };
}

export interface FaqsFaqs extends Schema.Component {
  collectionName: 'components_faqs_faqs';
  info: {
    displayName: 'Faqs';
    icon: 'envelop';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface FinancialBenefitsFinancialBenefits extends Schema.Component {
  collectionName: 'components_financial_benefits_financial_benefits';
  info: {
    displayName: 'Financial Benefits';
    icon: 'database';
    description: '';
  };
  attributes: {
    finTitle: Attribute.String & Attribute.Required;
    finDescriptions: Attribute.Blocks & Attribute.Required;
    finBenefitsIcons: Attribute.Media & Attribute.Required;
  };
}

export interface FooterComprehensiveInfo extends Schema.Component {
  collectionName: 'components_footer_comprehensive_infos';
  info: {
    displayName: 'comprehensive_info';
    icon: 'cube';
    description: '';
  };
  attributes: {
    comprehensive_info: Attribute.String;
    page_section_options: Attribute.Component<
      'footer.footer-section-option',
      true
    >;
  };
}

export interface FooterFooterSectionOption extends Schema.Component {
  collectionName: 'components_footer_footer_section_options';
  info: {
    displayName: 'Footer Section Option';
    icon: 'cube';
    description: '';
  };
  attributes: {
    page_section_options: Attribute.String;
    page: Attribute.Component<'footer.pages', true>;
  };
}

export interface FooterPages extends Schema.Component {
  collectionName: 'components_footer_pages';
  info: {
    displayName: 'pages';
    icon: 'cube';
  };
  attributes: {
    page_title: Attribute.String;
    link: Attribute.String;
  };
}

export interface HeaderMenuMenu extends Schema.Component {
  collectionName: 'components_header_menu_menus';
  info: {
    displayName: 'menu';
    icon: 'filter';
  };
  attributes: {
    link_type: Attribute.Enumeration<['internal', 'external']>;
    menu_link_title: Attribute.String;
    link: Attribute.String;
  };
}

export interface LandingBenefitsBenefits extends Schema.Component {
  collectionName: 'components_benefits_benefits';
  info: {
    displayName: 'Landing Benefits';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    benefit_images: Attribute.Media;
    other_benefits: Attribute.String;
  };
}

export interface RegistrationStepsRegistrationSteps extends Schema.Component {
  collectionName: 'components_registration_steps_reg_steps';
  info: {
    displayName: 'Registration Steps';
    icon: 'connector';
    description: '';
  };
  attributes: {
    content: Attribute.String;
    image: Attribute.Media;
    cta: Attribute.Component<'cta.links'>;
  };
}

export interface RemarkableFeaturesRemarkableFeatures extends Schema.Component {
  collectionName: 'components_remarkable_features_remarkable_features';
  info: {
    displayName: 'Remarkable Features';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    remarkable_title: Attribute.String & Attribute.Required;
    remarkable_content: Attribute.String & Attribute.Required;
    remarkable_icon: Attribute.Media & Attribute.Required;
  };
}

export interface RewardingBannerRewardingBanner extends Schema.Component {
  collectionName: 'components_rewarding_banner_rewarding_banners';
  info: {
    displayName: 'Rewarding Banner';
    icon: 'book';
    description: '';
  };
  attributes: {
    rewTitle: Attribute.String & Attribute.Required;
    rewInformation: Attribute.Text & Attribute.Required;
    rewIcons: Attribute.Media & Attribute.Required;
  };
}

export interface SocailInfoAppInfo extends Schema.Component {
  collectionName: 'components_socail_info_app_infos';
  info: {
    displayName: 'app_info';
    icon: 'folder';
  };
  attributes: {
    app_image: Attribute.Media;
    link: Attribute.String;
  };
}

export interface SocailInfoSocailInfo extends Schema.Component {
  collectionName: 'components_socail_info_socail_infos';
  info: {
    displayName: 'socail_info';
    icon: 'cursor';
  };
  attributes: {
    socail_icon: Attribute.Media;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'benefits-details.benefits-details': BenefitsDetailsBenefitsDetails;
      'brands-partner.brands-partner': BrandsPartnerBrandsPartner;
      'card-compare-features.card-compare-features': CardCompareFeaturesCardCompareFeatures;
      'card-details.card-details': CardDetailsCardDetails;
      'card-entities.card-fees': CardEntitiesCardFees;
      'card-entities.card': CardEntitiesCard;
      'card-entities.discount': CardEntitiesDiscount;
      'card-entities.earn-rewards': CardEntitiesEarnRewards;
      'card-entities.other-discount': CardEntitiesOtherDiscount;
      'cards-collection-info.cards-collections': CardsCollectionInfoCardsCollections;
      'cta.links': CtaLinks;
      'faqs.faqs': FaqsFaqs;
      'financial-benefits.financial-benefits': FinancialBenefitsFinancialBenefits;
      'footer.comprehensive-info': FooterComprehensiveInfo;
      'footer.footer-section-option': FooterFooterSectionOption;
      'footer.pages': FooterPages;
      'header-menu.menu': HeaderMenuMenu;
      'landing-benefits.benefits': LandingBenefitsBenefits;
      'registration-steps.registration-steps': RegistrationStepsRegistrationSteps;
      'remarkable-features.remarkable-features': RemarkableFeaturesRemarkableFeatures;
      'rewarding-banner.rewarding-banner': RewardingBannerRewardingBanner;
      'socail-info.app-info': SocailInfoAppInfo;
      'socail-info.socail-info': SocailInfoSocailInfo;
    }
  }
}
