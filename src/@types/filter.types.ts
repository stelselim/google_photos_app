export interface IFilterTypes {
  contentFilter?: IContentFilterTypes;
  dateFilter?: IDateFilterTypes;
  featureFilter?: IFeatureFilterTypes;
  mediaTypeFilter?: IMediaTypeFilterTypes;
  includeArchivedMedia?: true; // Archieved Media Filters
}

/// Content Filters
/// max. 10 Categories can be filtered in single request.
interface IContentFilterTypes {
  includedContentCategories?: Array<TCategoryTypes>;
  excludedContentCategories?: Array<TCategoryTypes>;
}

type TCategoryTypes =
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
interface IDateFilterTypes {
  dates?: Array<IDateTypes>;
  ranges?: Array<IDateRangeTypes>;
}

interface IDateTypes {
  day?: number;
  month?: number;
  year?: number;
}

interface IDateRangeTypes {
  startDate: IDateRangeDateTypes;
  endDate: IDateRangeDateTypes;
}

interface IDateRangeDateTypes {
  day: number;
  month: number;
  year: number;
}

/// Feature Filter Ex. Favorites
interface IFeatureFilterTypes {
  includedFeatures: ['FAVORITES'];
}

// Media Types Filters
interface IMediaTypeFilterTypes {
  mediaTypes: ['PHOTO'] | ['VIDEO'] | ['PHOTO', 'VIDEO'];
}
