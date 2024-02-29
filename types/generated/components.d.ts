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
  };
  attributes: {
    brandImage: Attribute.Media & Attribute.Required;
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
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    descriptions: Attribute.Blocks & Attribute.Required;
    BenefitsIcons: Attribute.Media & Attribute.Required;
  };
}

export interface RewardingBannerRewardingBanner extends Schema.Component {
  collectionName: 'components_rewarding_banner_rewarding_banners';
  info: {
    displayName: 'Rewarding Banner';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    rewardInformations: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'benefits-details.benefits-details': BenefitsDetailsBenefitsDetails;
      'brands-partner.brands-partner': BrandsPartnerBrandsPartner;
      'cards-collection-info.cards-collections': CardsCollectionInfoCardsCollections;
      'faqs.faqs': FaqsFaqs;
      'financial-benefits.financial-benefits': FinancialBenefitsFinancialBenefits;
      'rewarding-banner.rewarding-banner': RewardingBannerRewardingBanner;
    }
  }
}
