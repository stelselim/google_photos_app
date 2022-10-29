export const searchCategoryTypes = [
  'ANIMALS',
  'ARTS',
  'BIRTHDAYS',
  'CITYSCAPES',
  'CRAFTS',
  'DOCUMENTS',
  'FASHION',
  'FLOWERS',
  'FOOD',
  'GARDENS',
  'HOLIDAYS',
  'HOUSES',
  'LANDMARKS',
  'LANDSCAPES',
  'NIGHT',
  'PEOPLE',
  'PERFORMANCES',
  'PETS',
  'RECEIPTS',
  'SCREENSHOTS',
  'SELFIES',
  'SPORT',
  'TRAVEL',
  'UTILITY',
  'WEDDINGS',
  'WHITEBOARDS',
] as const;

export type IFilterTypes = {
  contentFilter?: IContentFilterTypes;
  dateFilter?: IDateFilterTypes;
  featureFilter?: IFeatureFilterTypes;
  mediaTypeFilter?: IMediaTypeFilterTypes;
  includeArchivedMedia?: true; // Archieved Media Filters
};

/// Content Filters
/// max. 10 Categories can be filtered in single request.
type IContentFilterTypes = {
  includedContentCategories?: Array<TCategoryTypes>;
  excludedContentCategories?: Array<TCategoryTypes>;
};

export type TCategoryTypes =
  | 'ANIMALS'
  | 'ARTS'
  | 'BIRTHDAYS'
  | 'CITYSCAPES'
  | 'CRAFTS'
  | 'DOCUMENTS'
  | 'FASHION'
  | 'FLOWERS'
  | 'FOOD'
  | 'GARDENS'
  | 'HOLIDAYS'
  | 'HOUSES'
  | 'LANDMARKS'
  | 'LANDSCAPES'
  | 'NIGHT'
  | 'PEOPLE'
  | 'PERFORMANCES'
  | 'PETS'
  | 'RECEIPTS'
  | 'SCREENSHOTS'
  | 'SELFIES'
  | 'SPORT'
  | 'TRAVEL'
  | 'UTILITY'
  | 'WEDDINGS'
  | 'WHITEBOARDS';

/// Date & Date Range Filters
type IDateFilterTypes = {
  dates?: Array<IDateTypes>;
  ranges?: Array<IDateRangeTypes>;
};

type IDateTypes = {
  day?: number;
  month?: number;
  year?: number;
};

type IDateRangeTypes = {
  startDate: IDateRangeDateTypes;
  endDate: IDateRangeDateTypes;
};

type IDateRangeDateTypes = {
  day: number;
  month: number;
  year: number;
};

/// Feature Filter Ex. Favorites
type IFeatureFilterTypes = {
  includedFeatures: ['FAVORITES'];
};

// Media Types Filters
type IMediaTypeFilterTypes = {
  mediaTypes: ['PHOTO'] | ['VIDEO'] | ['PHOTO', 'VIDEO'];
};
