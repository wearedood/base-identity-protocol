# Contributing to Base Identity Protocol

We welcome contributions to the Base Identity Protocol! This document provides guidelines for contributing to our project.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Git
- Base wallet for testing
- Basic understanding of Solidity and TypeScript

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/base-identity-protocol.git
   cd base-identity-protocol
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run tests**
   ```bash
   npm test
   ```

## 📋 Contribution Guidelines

### Code Style

- **Solidity**: Follow [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- **TypeScript/JavaScript**: Use Prettier and ESLint configurations
- **Documentation**: Write clear, concise documentation
- **Comments**: Use JSDoc for functions and complex logic

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(contracts): add DID registry contract
fix(sdk): resolve credential verification issue
docs(readme): update installation instructions
```

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write tests for new functionality
   - Update documentation as needed
   - Ensure all tests pass

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Use a clear, descriptive title
   - Fill out the PR template
   - Link any related issues
   - Request review from maintainers

### Testing Requirements

- **Unit Tests**: All new functions must have unit tests
- **Integration Tests**: Test contract interactions
- **Coverage**: Maintain >90% test coverage
- **Gas Optimization**: Ensure efficient gas usage

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- test/DIDRegistry.test.js
```

## 🏗️ Project Structure

```
base-identity-protocol/
├── contracts/              # Smart contracts
│   ├── core/              # Core identity contracts
│   ├── credentials/       # Credential management
│   └── utils/             # Utility contracts
├── sdk/                   # JavaScript/TypeScript SDK
│   ├── src/              # Source code
│   ├── test/             # SDK tests
│   └── examples/         # Usage examples
├── docs/                  # Documentation
├── test/                  # Contract tests
├── scripts/               # Deployment scripts
└── tools/                 # Development tools
```

## 🐛 Bug Reports

When reporting bugs, please include:

- **Environment**: OS, Node.js version, browser
- **Steps to reproduce**: Clear, numbered steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Error messages**: Full error logs

## 💡 Feature Requests

For feature requests:

- **Use case**: Describe the problem you're solving
- **Proposed solution**: Your suggested approach
- **Alternatives**: Other solutions you've considered
- **Additional context**: Any other relevant information

## 🔒 Security

- **Security issues**: Report privately to security@base-identity.org
- **Bug bounty**: See [SECURITY.md](./SECURITY.md) for details
- **Responsible disclosure**: Give us time to fix before public disclosure

## 📚 Documentation

### Writing Documentation

- Use clear, simple language
- Include code examples
- Test all examples
- Update related documentation

### Documentation Types

- **API Documentation**: JSDoc comments in code
- **User Guides**: Step-by-step tutorials
- **Developer Guides**: Technical implementation details
- **Examples**: Working code samples

## 🎯 Areas for Contribution

### High Priority
- Smart contract optimizations
- SDK improvements
- Documentation enhancements
- Test coverage improvements

### Medium Priority
- Integration examples
- Developer tools
- Performance optimizations
- UI/UX improvements

### Good First Issues
- Documentation fixes
- Test additions
- Code style improvements
- Example applications

## 🏆 Recognition

Contributors are recognized in:

- **README.md**: Major contributors listed
- **Release notes**: Contribution acknowledgments
- **Discord**: Contributor role and recognition
- **NFT badges**: Special contributor NFTs

## 📞 Getting Help

- **Discord**: [Join our community](https://discord.gg/base-identity)
- **GitHub Discussions**: For questions and ideas
- **Issues**: For bugs and feature requests
- **Email**: dev@base-identity.org

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Thank you for contributing to Base Identity Protocol! Your efforts help build the future of decentralized identity on Base.

---

**Questions?** Feel free to reach out on [Discord](https://discord.gg/base-identity) or create an issue.
