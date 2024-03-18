import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles';
  info: {
    singularName: 'article';
    pluralName: 'articles';
    displayName: 'Articles';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    article_images: Attribute.Media;
    artical_title: Attribute.String & Attribute.Required;
    public_date: Attribute.Date;
    artical_description: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBestDiscountBestDiscount extends Schema.CollectionType {
  collectionName: 'best_discounts';
  info: {
    singularName: 'best-discount';
    pluralName: 'best-discounts';
    displayName: 'Best discounts';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::best-discount.best-discount',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::best-discount.best-discount',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrandsPartnerBrandsPartner extends Schema.CollectionType {
  collectionName: 'brands_partners';
  info: {
    singularName: 'brands-partner';
    pluralName: 'brands-partners';
    displayName: 'Brands Partners';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    brand_title: Attribute.String & Attribute.Required;
    brand_message: Attribute.Text;
    brand_logo: Attribute.Component<'brands-partner.brands-partner', true>;
    slug: Attribute.UID<'api::brands-partner.brands-partner', 'brand_title'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brands-partner.brands-partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brands-partner.brands-partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardCard extends Schema.CollectionType {
  collectionName: 'cards';
  info: {
    singularName: 'card';
    pluralName: 'cards';
    displayName: 'Cards';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    features_card_image: Attribute.Media;
    preview_card_image: Attribute.Media & Attribute.Required;
    card_name_heading: Attribute.String & Attribute.Required & Attribute.Unique;
    card: Attribute.Component<'card-entities.card'>;
    card_type: Attribute.Relation<
      'api::card.card',
      'oneToOne',
      'api::card-type.card-type'
    >;
    compare_image: Attribute.Media;
    card_compare_feature: Attribute.Relation<
      'api::card.card',
      'manyToOne',
      'api::card-compare-feature.card-compare-feature'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::card.card', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::card.card', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCardBannerCardBanner extends Schema.CollectionType {
  collectionName: 'card_banners';
  info: {
    singularName: 'card-banner';
    pluralName: 'card-banners';
    displayName: 'Card Banners';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    top_title: Attribute.String;
    bottom_title: Attribute.String;
    card_type: Attribute.Relation<
      'api::card-banner.card-banner',
      'oneToOne',
      'api::card-type.card-type'
    >;
    card_bg_image: Attribute.Media;
    card_image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::card-banner.card-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::card-banner.card-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardCompareFeatureCardCompareFeature
  extends Schema.CollectionType {
  collectionName: 'card_compare_features';
  info: {
    singularName: 'card-compare-feature';
    pluralName: 'card-compare-features';
    displayName: 'Card Compare Features';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benefits_charges: Attribute.Enumeration<
      ['card_benefits', 'fees_and_charges']
    > &
      Attribute.Required;
    cards: Attribute.Relation<
      'api::card-compare-feature.card-compare-feature',
      'oneToMany',
      'api::card.card'
    >;
    card_features: Attribute.Component<
      'card-compare-features.card-compare-features',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::card-compare-feature.card-compare-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::card-compare-feature.card-compare-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardDetailCardDetail extends Schema.CollectionType {
  collectionName: 'card_details';
  info: {
    singularName: 'card-detail';
    pluralName: 'card-details';
    displayName: 'Card Details';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardNamHeading: Attribute.String & Attribute.Required & Attribute.Unique;
    cardDetails: Attribute.Component<'card-details.card-details', true>;
    cards_entity: Attribute.Relation<
      'api::card-detail.card-detail',
      'oneToOne',
      'api::cards-entitie.cards-entitie'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::card-detail.card-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::card-detail.card-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardLeadCardLead extends Schema.CollectionType {
  collectionName: 'card_leads';
  info: {
    singularName: 'card-lead';
    pluralName: 'card-leads';
    displayName: 'Card Leads';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    mobile: Attribute.String;
    pan: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
    pin_code: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 6;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::card-lead.card-lead',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::card-lead.card-lead',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardTypeCardType extends Schema.CollectionType {
  collectionName: 'card_types';
  info: {
    singularName: 'card-type';
    pluralName: 'card-types';
    displayName: 'Card Types';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    card_type: Attribute.String & Attribute.Required & Attribute.Unique;
    is_active: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::card-type.card-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::card-type.card-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardsDetailCardsDetail extends Schema.CollectionType {
  collectionName: 'cards_details';
  info: {
    singularName: 'cards-detail';
    pluralName: 'cards-details';
    displayName: 'Cards Details';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    card_details_heading: Attribute.String & Attribute.Required;
    card_bg_image: Attribute.Media;
    remarkable_heading: Attribute.String;
    remarkable_features: Attribute.Component<
      'remarkable-features.remarkable-features',
      true
    >;
    card_type: Attribute.Relation<
      'api::cards-detail.cards-detail',
      'oneToOne',
      'api::card-type.card-type'
    >;
    other_feature: Attribute.Component<'card-entities.other-discount', true>;
    card_image: Attribute.Media & Attribute.Required;
    earn_rewards: Attribute.Component<'card-entities.earn-rewards'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cards-detail.cards-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cards-detail.cards-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCardsEntitieCardsEntitie extends Schema.CollectionType {
  collectionName: 'cards_entities';
  info: {
    singularName: 'cards-entitie';
    pluralName: 'cards-entities';
    displayName: 'cards Entities';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardName: Attribute.String & Attribute.Required & Attribute.Unique;
    cardImage: Attribute.Media & Attribute.Required;
    cardMobImage: Attribute.Media & Attribute.Required;
    cardHeading: Attribute.Text & Attribute.Required;
    cardFees: Attribute.Component<'card-entities.card-fees', true>;
    card_detail: Attribute.Relation<
      'api::cards-entitie.cards-entitie',
      'oneToOne',
      'api::card-detail.card-detail'
    >;
    other_benefits: Attribute.Relation<
      'api::cards-entitie.cards-entitie',
      'oneToMany',
      'api::other-benefit.other-benefit'
    >;
    exclusive_offers: Attribute.Relation<
      'api::cards-entitie.cards-entitie',
      'oneToMany',
      'api::exclusive-offer.exclusive-offer'
    >;
    cardBenifits: Attribute.Component<
      'benefits-details.benefits-details',
      true
    > &
      Attribute.Required;
    landing_page: Attribute.Relation<
      'api::cards-entitie.cards-entitie',
      'manyToOne',
      'api::landing-page.landing-page'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cards-entitie.cards-entitie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cards-entitie.cards-entitie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCraftedCardCraftedCard extends Schema.CollectionType {
  collectionName: 'crafted_cards';
  info: {
    singularName: 'crafted-card';
    pluralName: 'crafted-cards';
    displayName: 'Crafted Cards';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    crafted_card_heading: Attribute.String & Attribute.Required;
    cta: Attribute.Component<'cta.links'>;
    crafted_card_image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::crafted-card.crafted-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::crafted-card.crafted-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCreditCardStepCreditCardStep extends Schema.CollectionType {
  collectionName: 'credit_card_steps';
  info: {
    singularName: 'credit-card-step';
    pluralName: 'credit-card-steps';
    displayName: 'Credit Card Steps';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    steps: Attribute.Integer;
    content: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::credit-card-step.credit-card-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::credit-card-step.credit-card-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExclusiveOfferExclusiveOffer extends Schema.CollectionType {
  collectionName: 'exclusive_offers';
  info: {
    singularName: 'exclusive-offer';
    pluralName: 'exclusive-offers';
    displayName: 'Exclusive Offers';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    brand_logo: Attribute.Media;
    offers: Attribute.String & Attribute.Required;
    offer_content: Attribute.String;
    is_available: Attribute.Boolean & Attribute.DefaultTo<true>;
    image: Attribute.Media;
    exclusive_offer_type: Attribute.Enumeration<
      ['All', 'Dining', 'Movies', 'Travel']
    > &
      Attribute.Required;
    card_types: Attribute.Relation<
      'api::exclusive-offer.exclusive-offer',
      'oneToMany',
      'api::card-type.card-type'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::exclusive-offer.exclusive-offer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::exclusive-offer.exclusive-offer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.CollectionType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'Faqs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    faqs_title: Attribute.Text & Attribute.Required;
    faqs: Attribute.Component<'faqs.faqs', true>;
    card_types: Attribute.Relation<
      'api::faq.faq',
      'oneToMany',
      'api::card-type.card-type'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFinancialBenefitFinancialBenefit
  extends Schema.CollectionType {
  collectionName: 'financial_benefits';
  info: {
    singularName: 'financial-benefit';
    pluralName: 'financial-benefits';
    displayName: 'Financial Benefits';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    finHeading: Attribute.Text & Attribute.Required;
    benefitsDetails: Attribute.Component<
      'financial-benefits.financial-benefits',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::financial-benefit.financial-benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::financial-benefit.financial-benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.CollectionType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    comprehensive_info: Attribute.Component<'footer.comprehensive-info', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderMenuHeaderMenu extends Schema.CollectionType {
  collectionName: 'header_menus';
  info: {
    singularName: 'header-menu';
    pluralName: 'header-menus';
    displayName: 'Header Menu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    menu_link_title: Attribute.String;
    menu_image_icon: Attribute.Media;
    link: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header-menu.header-menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header-menu.header-menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingBenefitLandingBenefit extends Schema.CollectionType {
  collectionName: 'landing_benefits';
  info: {
    singularName: 'landing-benefit';
    pluralName: 'landing-benefits';
    displayName: 'Landing Benefits';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    benefits_details: Attribute.Component<'landing-benefits.benefits', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing-benefit.landing-benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::landing-benefit.landing-benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingPageLandingPage extends Schema.CollectionType {
  collectionName: 'landing_pages';
  info: {
    singularName: 'landing-page';
    pluralName: 'landing-pages';
    displayName: 'Landing Pages';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.Text & Attribute.Required;
    benifits: Attribute.Component<'benefits-details.benefits-details', true> &
      Attribute.Required;
    cards_entities: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToMany',
      'api::cards-entitie.cards-entitie'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOtherBenefitOtherBenefit extends Schema.CollectionType {
  collectionName: 'other_benefits';
  info: {
    singularName: 'other-benefit';
    pluralName: 'other-benefits';
    displayName: 'Other Benefits';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benIcons: Attribute.Media;
    benTitle: Attribute.String;
    BenRewDescriptions: Attribute.String;
    others: Attribute.String;
    cards_entity: Attribute.Relation<
      'api::other-benefit.other-benefit',
      'manyToOne',
      'api::cards-entitie.cards-entitie'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::other-benefit.other-benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::other-benefit.other-benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPackedBenefitPackedBenefit extends Schema.CollectionType {
  collectionName: 'packed_benefits';
  info: {
    singularName: 'packed-benefit';
    pluralName: 'packed-benefits';
    displayName: 'Packed Benefits';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    card_type: Attribute.Relation<
      'api::packed-benefit.packed-benefit',
      'oneToOne',
      'api::card-type.card-type'
    >;
    pack_benefit_title: Attribute.String;
    benefits: Attribute.Component<'landing-benefits.benefits', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::packed-benefit.packed-benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::packed-benefit.packed-benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRegistrationCardsStepRegistrationCardsStep
  extends Schema.CollectionType {
  collectionName: 'registration_cards_steps';
  info: {
    singularName: 'registration-cards-step';
    pluralName: 'registration-cards-steps';
    displayName: 'Registration cards steps';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    card_type: Attribute.Relation<
      'api::registration-cards-step.registration-cards-step',
      'oneToOne',
      'api::card-type.card-type'
    >;
    heading: Attribute.String;
    registration_steps: Attribute.Component<
      'registration-steps.registration-steps',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::registration-cards-step.registration-cards-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::registration-cards-step.registration-cards-step',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRewardingBannerRewardingBanner
  extends Schema.CollectionType {
  collectionName: 'rewarding_banners';
  info: {
    singularName: 'rewarding-banner';
    pluralName: 'rewarding-banners';
    displayName: 'Rewarding Banners';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    rewHeading: Attribute.Text & Attribute.Required;
    Rewards: Attribute.Component<'rewarding-banner.rewarding-banner', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rewarding-banner.rewarding-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rewarding-banner.rewarding-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRightHeaderMenuRightHeaderMenu
  extends Schema.CollectionType {
  collectionName: 'right_header_menus';
  info: {
    singularName: 'right-header-menu';
    pluralName: 'right-header-menus';
    displayName: 'Right Header menu';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    menu_image_icon: Attribute.Media;
    link_type: Attribute.Enumeration<['internal', 'external']>;
    redirect_link: Attribute.String;
    menu: Attribute.Component<'header-menu.menu', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::right-header-menu.right-header-menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::right-header-menu.right-header-menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSearchQuestionnaireSearchQuestionnaire
  extends Schema.CollectionType {
  collectionName: 'search_questionnaires';
  info: {
    singularName: 'search-questionnaire';
    pluralName: 'search-questionnaires';
    displayName: 'Search Questionnaires';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    search_tags: Attribute.Relation<
      'api::search-questionnaire.search-questionnaire',
      'oneToMany',
      'api::search-tag.search-tag'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::search-questionnaire.search-questionnaire',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::search-questionnaire.search-questionnaire',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSearchTagSearchTag extends Schema.CollectionType {
  collectionName: 'search_tags';
  info: {
    singularName: 'search-tag';
    pluralName: 'search-tags';
    displayName: 'Search Tags';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    cards: Attribute.Relation<
      'api::search-tag.search-tag',
      'oneToMany',
      'api::card.card'
    >;
    search_questionnaire: Attribute.Relation<
      'api::search-tag.search-tag',
      'manyToOne',
      'api::search-questionnaire.search-questionnaire'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::search-tag.search-tag',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::search-tag.search-tag',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSocialInformationSocialInformation
  extends Schema.SingleType {
  collectionName: 'social_informations';
  info: {
    singularName: 'social-information';
    pluralName: 'social-informations';
    displayName: 'Social Information';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    socail_info: Attribute.Component<'socail-info.socail-info', true>;
    toll_free_no: Attribute.String;
    customer_care_no: Attribute.String;
    Application_info: Attribute.Component<'socail-info.app-info', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::social-information.social-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::social-information.social-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::article.article': ApiArticleArticle;
      'api::best-discount.best-discount': ApiBestDiscountBestDiscount;
      'api::brands-partner.brands-partner': ApiBrandsPartnerBrandsPartner;
      'api::card.card': ApiCardCard;
      'api::card-banner.card-banner': ApiCardBannerCardBanner;
      'api::card-compare-feature.card-compare-feature': ApiCardCompareFeatureCardCompareFeature;
      'api::card-detail.card-detail': ApiCardDetailCardDetail;
      'api::card-lead.card-lead': ApiCardLeadCardLead;
      'api::card-type.card-type': ApiCardTypeCardType;
      'api::cards-detail.cards-detail': ApiCardsDetailCardsDetail;
      'api::cards-entitie.cards-entitie': ApiCardsEntitieCardsEntitie;
      'api::crafted-card.crafted-card': ApiCraftedCardCraftedCard;
      'api::credit-card-step.credit-card-step': ApiCreditCardStepCreditCardStep;
      'api::exclusive-offer.exclusive-offer': ApiExclusiveOfferExclusiveOffer;
      'api::faq.faq': ApiFaqFaq;
      'api::financial-benefit.financial-benefit': ApiFinancialBenefitFinancialBenefit;
      'api::footer.footer': ApiFooterFooter;
      'api::header-menu.header-menu': ApiHeaderMenuHeaderMenu;
      'api::landing-benefit.landing-benefit': ApiLandingBenefitLandingBenefit;
      'api::landing-page.landing-page': ApiLandingPageLandingPage;
      'api::other-benefit.other-benefit': ApiOtherBenefitOtherBenefit;
      'api::packed-benefit.packed-benefit': ApiPackedBenefitPackedBenefit;
      'api::registration-cards-step.registration-cards-step': ApiRegistrationCardsStepRegistrationCardsStep;
      'api::rewarding-banner.rewarding-banner': ApiRewardingBannerRewardingBanner;
      'api::right-header-menu.right-header-menu': ApiRightHeaderMenuRightHeaderMenu;
      'api::search-questionnaire.search-questionnaire': ApiSearchQuestionnaireSearchQuestionnaire;
      'api::search-tag.search-tag': ApiSearchTagSearchTag;
      'api::social-information.social-information': ApiSocialInformationSocialInformation;
    }
  }
}
