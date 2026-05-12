import uiReducer, {
  openDetailModal,
  closeDetailModal,
  setIsLoading,
  toggleMobileMenu,
  closeMobileMenu,
} from '../store/uiSlice';

describe('uiSlice', () => {
  const initialState = {
    isDetailModalOpen: false,
    isLoading: false,
    isMobileMenuOpen: false,
  };

  it('should return the initial state', () => {
    expect(uiReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle openDetailModal', () => {
    const state = uiReducer(initialState, openDetailModal());
    expect(state.isDetailModalOpen).toBe(true);
  });

  it('should handle closeDetailModal', () => {
    const stateOpen = { ...initialState, isDetailModalOpen: true };
    const state = uiReducer(stateOpen, closeDetailModal());
    expect(state.isDetailModalOpen).toBe(false);
  });

  it('should handle setIsLoading', () => {
    const state = uiReducer(initialState, setIsLoading(true));
    expect(state.isLoading).toBe(true);
  });

  it('should handle toggleMobileMenu', () => {
    const state = uiReducer(initialState, toggleMobileMenu());
    expect(state.isMobileMenuOpen).toBe(true);

    const state2 = uiReducer(state, toggleMobileMenu());
    expect(state2.isMobileMenuOpen).toBe(false);
  });

  it('should handle closeMobileMenu', () => {
    const stateOpen = { ...initialState, isMobileMenuOpen: true };
    const state = uiReducer(stateOpen, closeMobileMenu());
    expect(state.isMobileMenuOpen).toBe(false);
  });
});
