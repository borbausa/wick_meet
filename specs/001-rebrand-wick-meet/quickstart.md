# Quickstart: Verify Rebrand

**Date**: 2026-05-26

## Build & Launch Verification

After completing all rebrand tasks, verify the app builds and launches with new branding:

### 1. Install Dependencies

```bash
cd frontend
pnpm install
```

### 2. Development Build

```bash
# macOS
pnpm run tauri:dev

# Windows
pnpm run tauri:dev

# Linux
pnpm run tauri:dev
```

### 3. Visual Verification Checklist

Open the app and confirm:

- [ ] Window title shows "Wick Meet"
- [ ] Sidebar brand text displays "Wick Meet"
- [ ] About dialog says "About Wick Meet"
- [ ] Onboarding flow displays "Wick Meet" (Welcome screen, all steps)
- [ ] System tray tooltip shows "Wick Meet"
- [ ] Browser tab title uses "Wick Meet"

### 4. Grep Verification

```bash
# Should only return internal/retained references (data paths, comments, IndexedDB)
grep -ri "meetily" frontend/src/ frontend/src-tauri/src/ --include="*.ts" --include="*.tsx" --include="*.rs" README.md CONTRIBUTING.md PRIVACY_POLICY.md
```

Expected remaining references (all internal):
- `indexedDBService.ts` — `MeetilyRecoveryDB` (retained)
- `recording_preferences.rs` — `meetily-recordings` (data path)
- `whisper_engine.rs` — `path.push("Meetily")` (data path)
- `notifications/settings.rs` — `path.push("meetily")` (data path)
- `templates/loader.rs` — `path.push("Meetily")` (data path)
- `core_audio.rs` — `meetily-audio-tap` (internal thread name)
- `decoder.rs` — `.meetily_decode_` (temp file prefix)
- `lib_old_complex.rs` — Legacy code (unused)
- Internal comments only in `summary_engine/`, `console_utils/`, `parakeet_engine/`

### 5. Production Build

```bash
pnpm run tauri:build
```

Verify the build artifacts use "Wick Meet" in package names.
